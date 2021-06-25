const MealPlanTable = ({ mealPlans }) => (
    <>
        <h2 className="text-xl font-medium leading-normal my-4 text-gray-800">Valid Meal Plans</h2>
        <table className="items-center w-full bg-transparent border-collapse">
            <thead>
            <tr>
                <th className="px-2 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Breakfast</th>
                <th className="px-2 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Lunch</th>
                <th className="px-2 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Dinner</th>
                <th className="px-2 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Snack 1</th>
                <th className="px-2 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Snack 2</th>
            </tr>
            </thead>
            <tbody>
            {mealPlans.map(mealPlan => (
                <tr className="group">
                    {mealPlan.meals.map(meal =>
                        <td className="group-hover:bg-gray-100 border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left">{meal}</td>
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    </>
);

export default MealPlanTable;
