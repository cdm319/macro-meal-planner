import fs from "fs";
import parse from "csv-parse/lib/sync";

const HomePage = ({ data, error }) => {
    return (
        <>
            <h1>Meals</h1>
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
