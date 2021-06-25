const MealPlanTable = props => {
    const { mealPlans } = props;

    return (<table>
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
        {mealPlans.map((mealPlan) => (
            <tr>{mealPlan.meals.map(meal => <td>{meal}</td>)}</tr>
        ))}
        </tbody>
    </table>)
};

export default MealPlanTable;
