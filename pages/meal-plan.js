import { useState } from 'react';
import { getSession } from 'next-auth/client';
import MealPlanTable from '../components/MealPlanTable';
import TextField from '../components/TextField';

const MealPlanPage = () => {
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
                    <TextField id="kcal" label="Calories (kcal)" />
                    <TextField id="protein" label="Protein (g)" />
                    <TextField id="carbs" label="Carbs (g)" />
                    <TextField id="fat" label="Fat (g)" />

                    <input type="submit" value="Generate" className="mt-2 block w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white tracking-wide font-semibold py-2 p-4 cursor-pointer shadow-md"></input>
                </form>
            </div>

            <div>
                {
                    mealPlans &&
                    Object.keys(mealPlans).length > 0 &&
                    <MealPlanTable mealPlans={mealPlans} />
                }
            </div>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const { res } = context;
    const session = await getSession(context);

    if (!session) {
        return { redirect: { permanent: false, destination: '/' } };
    }

    return { props: { session } };
};

export default MealPlanPage;
