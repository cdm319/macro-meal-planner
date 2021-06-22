import fs from "fs";
import parse from "csv-parse/lib/sync";

const stubData = [{"meals": ["Croissant", "Slow Cooker Jamaican Chicken Curry", "Smoky Pork & Boston Beans", "Fat Free Greek Yoghurt, Honey & Fruit", "BBQ Chicken Wrap"], "kcal": 1791, "protein": 180, "carbs": 182, "fat": 40}, {"meals": ["Croissant", "FMC Orange Chicken", "Turkey Meatballs & Pasta", "Chocolate Protein Shake (Milk)", "Vanilla Protein Shake (Milk)"], "kcal": 1794, "protein": 181, "carbs": 180, "fat": 36}];

const fileContent = fs.readFileSync(process.cwd() + '/_data/meals.csv');
const meals = parse(fileContent, {columns: true});

// TODO - move this filtering to API layer
const breakfasts = meals.filter(meal => meal.type === "breakfast");
const mains = meals.filter(meal => meal.type === "main");
const snacks = meals.filter(meal => meal.type === "snack");

/**
 * Calculates the total kcal and macros for the given plan
 *
 * @param plan - the current plan
 * @returns {Object} - an object containing the total kcal, protein, carbs, fat
 */
const calculateTotals = plan =>
    plan.reduce((sum, i) => {
        sum.kcal += parseInt(i.kcal);
        sum.protein += parseInt(i.protein);
        sum.carbs += parseInt(i.carbs);
        sum.fat += parseInt(i.fat);
        return sum;
    }, { kcal: 0, protein: 0, carbs: 0, fat: 0 });

/**
 * Checks if the current plan is below the target kcal and macros
 *
 * @param plan - the current meal plan
 * @param target - the target kcal and macros
 * @returns {boolean}
 */
const isPlanBelowTarget = (plan, target) => {
    const totals = calculateTotals(plan);

    return (
        totals.kcal <= target.kcal * 1.05 &&
        totals.protein <= target.protein * 1.05 &&
        totals.carbs <= target.carbs * 1.05 &&
        totals.fat <= target.fat * 1.05
    );
};

/**
 * Checks whether the completed plan is within the accepted margin of error
 *
 * @param plan - the completed meal plan
 * @param target - the target kcal and macros
 * @returns {boolean}
 */
const isPlanValid = (plan, target) => {
    const totals = calculateTotals(plan);

    const kcalRatio = totals.kcal / target.kcal;
    const pRatio = totals.protein / target.protein;
    const cRatio = totals.carbs / target.carbs;
    const fRatio = totals.fat / target.fat;

    return (
        kcalRatio >= 0.99 && kcalRatio <= 1.02 &&
        pRatio >= 0.99 && pRatio <= 1.05 &&       // we want to be strict on protein
        cRatio >= 0.90 && cRatio <= 1.05 &&
        fRatio >= 0.90 && fRatio <= 1.05
    );
};

/**
 * Iterates through the list of meals and generates an array of valid meal plans. A meal plan
 * consists of one breakfast, 2 main meals and an optional snack.
 *
 * @param kcal - max kcal
 * @param protein - max grams of protein
 * @param carbs - max grams of carbohydrates
 * @param fat - max grams of fat
 * @returns an array of valid meal plan objects
 */
const calculateMealPlans = targetMacros => {
    let validMealPlans = [];

    // TODO - break the complexity here, there's an insane amount of iteration
    breakfasts.map(breakfast => {
        const currentPlan = [];

        currentPlan.push(breakfast);

        if (isPlanBelowTarget(currentPlan, targetMacros)) {
            mains.map(main => {
                currentPlan.push(main);

                if (isPlanBelowTarget(currentPlan, targetMacros)) {
                    const remainingMains = mains.filter(item => item.name !== main.name);

                    remainingMains.map(rmain => {
                        currentPlan.push(rmain);

                        if (isPlanBelowTarget(currentPlan, targetMacros)) {
                            snacks.map(snack => {
                                currentPlan.push(snack);

                                if (isPlanBelowTarget(currentPlan, targetMacros)) {
                                    const remainingSnacks = snacks.filter(item => item.name !== snack.name);
                                    remainingSnacks.map(rSnack => {
                                        currentPlan.push(rSnack);

                                        if (isPlanValid(currentPlan, targetMacros)) {
                                            const totals = calculateTotals(currentPlan);
                                            const mealNames = currentPlan.reduce((curr, i) => [...curr, i.name], []);

                                            validMealPlans.push({ meals: mealNames, ...totals });
                                        }

                                        currentPlan.pop();
                                    });
                                }

                                currentPlan.pop();
                            });
                        }

                        currentPlan.pop();
                    });
                }

                currentPlan.pop();
            })
        }
    });

    return validMealPlans;
};

const handler = (req, res) => {
    console.log(req.body);
    const { kcal, protein, carbs, fat } = req.body;
    const targetKcal = parseInt(req.body.kcal) || 0;
    const targetP = parseInt(req.body.protein) || 0;
    const targetC = parseInt(req.body.carbs) || 0;
    const targetF = parseInt(req.body.fat) || 0;
    const targets = { kcal: targetKcal, protein: targetP, carbs: targetC, fat: targetF };
    console.log(targets);

    const mealPlans = calculateMealPlans(targets);

    res.status(200).json(mealPlans);
}

export default handler;
