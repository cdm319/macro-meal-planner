import { useRouter } from 'next/router';
import mealsApi from "../lib/db/meals";
import MealTypePill from "../components/MealTypePill";
import TextField from "../components/TextField";
import Dropdown from "../components/Dropdown";

const MealsPage = ({ recipes, error }) => {
    const router = useRouter();

    const refreshData = () => {
        router.replace(router.asPath);
    };

    const addMeal = async event => {
        event.preventDefault();

        const res = await fetch('/api/meals', {
            body: JSON.stringify({
                name: event.target.name.value,
                type: event.target.type.value,
                kcal: event.target.kcal.value,
                protein: event.target.protein.value,
                carbs: event.target.carbs.value,
                fat: event.target.fat.value
            }),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        });

        if (res.status == 200) {
            alert("Meal added!");
            event.target.reset();
            refreshData();
        } else {
            alert("An error occurred.")
        }
    };

    return (
        <>
            <div className="pb-4 max-w-md mx-auto">
                <h2 className="text-xl font-medium leading-normal my-4 text-gray-800">Add new meal</h2>
                <form className="grid grid-cols-1 gap-6" onSubmit={addMeal}>
                    <TextField id="name" label="Name" />
                    <Dropdown id="type" label="Type" options={['breakfast', 'main', 'snack']} />
                    <TextField id="kcal" label="Calories (kcal)" />
                    <TextField id="protein" label="Protein (g)" />
                    <TextField id="carbs" label="Carbs (g)" />
                    <TextField id="fat" label="Fat (g)" />

                    <input type="submit" value="Save" className="mt-2 block w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white tracking-wide font-semibold py-2 p-4 cursor-pointer shadow-md"></input>
                </form>
            </div>

            <h2 className="text-xl font-medium leading-normal my-4 text-gray-800">List of all meals</h2>
            {
                error &&
                <div>An error occurred!</div>
            }
            {
                !error && recipes && (
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                    <tr>
                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Type</th>
                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Calories</th>
                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Protein</th>
                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Carbs</th>
                        <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Fat</th>
                    </tr>
                    </thead>
                    <tbody>
                    { recipes.map((meal, i) => (
                        <tr key={i}>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left font-semibold">{meal.name}</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"><MealTypePill mealType={meal.type} /></td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{meal.kcal}</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{meal.protein}g</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{meal.carbs}g</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{meal.fat}g</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export const getServerSideProps = async () => {
    const recipes = await mealsApi.getMeals();

    return { props: { recipes } };
}

export default MealsPage;