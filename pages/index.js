import fs from "fs";
import parse from "csv-parse/lib/sync";
import { useState } from 'react';
import MealPlanTable from '../components/MealPlanTable';

const HomePage = ({ recipes, error }) => {
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
        <div className="md:container md:mx-auto bg-blueGray-100 text-center">
            <h1 className="text-4xl font-semibold leading-normal text-gray-800 my-12">Macro Meal Planner</h1>

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

            <div>
            <h2 className="text-xl font-medium leading-normal my-4 text-gray-800">List of all meals</h2>
                { error &&
                <div>An error occurred!</div>
                }
                { !error && recipes && (
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Type</th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Calories</th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Protein</th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Carbs</th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Fat</th>
                        </tr>
                    </thead>
                    <tbody>
                        { recipes.map((meal, i) => (
                            <tr key={i}>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left">{meal.name}</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left">{meal.type}</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{meal.kcal}</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{meal.protein}g</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{meal.carbs}g</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{meal.fat}g</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    const fileContent = fs.readFileSync(process.cwd() + '/_data/meals.csv');
    const recipes = parse(fileContent, {columns: true});

    return { props: { recipes } };
}

export default HomePage;
