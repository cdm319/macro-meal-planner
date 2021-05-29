import mealsApi from './api/meals/index.js';

const meals = mealsApi.getMeals();

// split out meals (ideally this should happen at API layer)
const breakfasts = meals.filter(meal => meal.type === "breakfast");
const mains = meals.filter(meal => meal.type === "main");
const snacks = meals.filter(meal => meal.type === "snack");

const calculateTotals = plan => plan.reduce((sum, i) => {
    sum.kcal += parseInt(i.kcal);
    sum.protein += parseInt(i.protein);
    sum.carbs += parseInt(i.carbs);
    sum.fat += parseInt(i.fat);
    return sum;
}, { kcal: 0, protein: 0, carbs: 0, fat: 0 });

const isPlanBelowTarget = (plan, target) => {
    const totals = calculateTotals(plan);

    // for now, we'll allow a 5% error margin
    return (
        totals.kcal <= target.kcal * 1.05 &&
        totals.protein <= target.protein * 1.05 &&
        totals.carbs <= target.carbs * 1.05 &&
        totals.fat <= target.fat * 1.05
    );
}

const isPlanValid = (plan, target) => {
    const totals = calculateTotals(plan);

    const kcalRatio = totals.kcal / target.kcal;
    const pRatio = totals.protein / target.protein;
    const cRatio = totals.carbs / target.carbs;
    const fRatio = totals.fat / target.fat;

    // for now, we'll allow 10% under and 1% over targets
    return (
        kcalRatio >= 0.9 && kcalRatio <= 1.01 &&
        pRatio >= 0.9 && pRatio <= 1.01 &&
        cRatio >= 0.9 && cRatio <= 1.01 &&
        fRatio >= 0.9 && fRatio <= 1.01
    );
}

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

    // set up results array
    let validMealPlans = [];

    // TODO - break the complexity here, there's an insane amount of iteration
    // loop through the breakfasts
    breakfasts.map(breakfast => {
        const currentPlan = [];

        // add breakfast
        currentPlan.push(breakfast);

        if (isPlanBelowTarget(currentPlan, targetMacros)) {
            // loop through the mains
            mains.map(main => {
                currentPlan.push(main);

                if (isPlanBelowTarget(currentPlan, targetMacros)) {
                    // get a list of the remaining main meals
                    const remainingMains = mains.filter(item => item.name !== main.name);

                    // loop through the remaining mains
                    remainingMains.map(rmain => {
                        currentPlan.push(rmain);

                        if (isPlanBelowTarget(currentPlan, targetMacros)) {
                            // loop through the snacks
                            snacks.map(snack => {
                                currentPlan.push(snack);

                                if (isPlanValid(currentPlan, targetMacros)) {
                                    // calculate some totals
                                    const totals = calculateTotals(currentPlan);

                                    const mealNames = currentPlan.reduce((arr, i) => {
                                        arr.push(i.name);
                                        return arr;
                                    }, []);

                                    const validPlan = {meals: mealNames, ...totals};

                                    // add to the list of valid options
                                    validMealPlans.push(validPlan);
                                }

                                // always pop the snack to keep searching for alternatives
                                currentPlan.pop();
                            });
                        }
                        // remove this option and move on
                        currentPlan.pop();
                    });
                }
                // remove this option and move on
                currentPlan.pop();
            })
        }
    });

    // return the (hopefully non-empty) list of options
    return validMealPlans;
};

const targets = {
    kcal: 1800,
    protein: 180,
    carbs: 180,
    fat: 40
};

const mealPlans = calculateMealPlans(targets);
mealPlans.map(plan => console.log(plan));
console.log(mealPlans.length);