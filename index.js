import mealsApi from './api/meals/index.js';

const meals = mealsApi.getMeals();

const targets = {
    kcal: 1800,
    protein: 180,
    carbs: 180,
    fat: 40
};

// split out meals (ideally this should happen at API layer)
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
        totals.kcal <= target.kcal &&
        totals.protein <= target.protein &&
        totals.carbs <= target.carbs &&
        totals.fat <= target.fat
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
        kcalRatio >= 0.95 && kcalRatio <= 1.01 &&
        pRatio >= 0.99 && pRatio <= 1.01 &&       // we want to be strict on protein
        cRatio >= 0.95 && cRatio <= 1.01 &&
        fRatio >= 0.95 && fRatio <= 1.01
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

                                if (isPlanValid(currentPlan, targetMacros)) {
                                    const totals = calculateTotals(currentPlan);

                                    const mealNames = currentPlan.reduce((arr, i) => {
                                        arr.push(i.name);
                                        return arr;
                                    }, []);

                                    validMealPlans.push({ meals: mealNames, ...totals });
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

const mealPlans = calculateMealPlans(targets);
console.log(mealPlans);
// mealPlans.map(plan => console.log(plan));
// console.log(`# of plans: ${mealPlans.length}`);