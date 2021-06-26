import { useState } from 'react';
import MealPlanTable from '../components/MealPlanTable';

const HomePage = () => {
    const [mealPlans, setMealPlans] = useState({});

    const generateMealPlan = async event => {
        event.preventDefault();

        const res = await fetch('/api/meal-plan', {
            body: JSON.stringify({
                kcal: event.target.kcal.value,
                protein: event.target.protein.value,
                carbs: event.target.carbs.value,
                fat: event.target.fat.value
            }),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        });

        const result = await res.json();
        setMealPlans(result);
    };

    return (
        <>
            <div className="pb-4 max-w-md mx-auto">
                <h2 className="text-xl font-medium leading-normal my-4 text-gray-800">Generate Meal Plan</h2>
                <form className="grid grid-cols-1 gap-6" onSubmit={generateMealPlan}>
                    <label className="block text-left">
                        <span className="text-gray-700">Calories (kcal)</span>
                        <input type="text" id="kcal" name="kcal" placeholder="kcal" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </label>
                    <label className="block text-left">
                        <span className="text-gray-700">Protein (g)</span>
                        <input type="text" id="protein" name="protein" placeholder="protein (g)" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </label>
                    <label className="block text-left">
                        <span className="text-gray-700">Carbs (g)</span>
                        <input type="text" id="carbs" name="carbs" placeholder="carbs (g)" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </label>
                    <label className="block text-left">
                        <span className="text-gray-700">Fat (g)</span>
                        <input type="text" id="fat" name="fat" placeholder="fat (g)" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </label>

                    <input type="submit" value="Generate" className="mt-2 block w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white tracking-wide font-semibold py-2 p-4 cursor-pointer shadow-md"></input>
                </form>
            </div>

            <div>
                { mealPlans && Object.keys(mealPlans).length > 0 && <MealPlanTable mealPlans={mealPlans} /> }
            </div>
        </>
    );
};

export default HomePage;
