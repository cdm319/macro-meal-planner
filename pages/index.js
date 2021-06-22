import fs from "fs";
import parse from "csv-parse/lib/sync";
import { useState } from 'react';

const HomePage = ({ data, error }) => {
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
            <h1>Generate Meal Plan</h1>
            <p></p>
            <form onSubmit={generateMealPlan}>
                <input type="text" id="kcal" name="kcal" placeholder="kcal" />
                <input type="text" id="protein" name="protein" placeholder="protein (g)" />
                <input type="text" id="carbs" name="carbs" placeholder="carbs (g)" />
                <input type="text" id="fat" name="fat" placeholder="fat (g)" />

                <button type="submit">Generate</button>
            </form>
            { mealPlans && Object.keys(mealPlans).length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Dinner</th>
                            <th>Snack 1</th>
                            <th>Snack 2</th>
                        </tr>
                    </thead>
                    <tbody>
                    { mealPlans.map((mealPlan) => (
                        <tr>{mealPlan.meals.map(meal => <td>{meal}</td>)}</tr>
                    ))}
                    </tbody>
                </table>
            }

            <h1>List of all meals</h1>
            { error && <div>An error occurred!</div>}
            { !error && data && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Energy (kcal)</th>
                            <th>Protein (g)</th>
                            <th>Carbs (g)</th>
                            <th>Fat (g)</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((meal, i) => (
                            <tr key={i}>
                                <td>{meal.name}</td>
                                <td>{meal.type}</td>
                                <td>{meal.kcal}</td>
                                <td>{meal.protein}</td>
                                <td>{meal.carbs}</td>
                                <td>{meal.fat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export const getServerSideProps = async () => {
    const fileContent = fs.readFileSync(process.cwd() + '/_data/meals.csv');
    const data = parse(fileContent, {columns: true});

    return { props: { data } };
}

export default HomePage;
