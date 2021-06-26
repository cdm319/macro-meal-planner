const MealPlanTable = ({ mealPlans }) => (
    <>
        <h2 className="text-xl font-medium leading-normal mt-4 mb-2 text-gray-800">Valid Meal Plans</h2>
        <p className="pb-4 text-s text-gray-400 italic">{mealPlans.length} results</p>
        <table className="items-center w-full bg-transparent border-collapse border border-solid border-gray-100 mb-12">
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
            {mealPlans.map((mealPlan, i) => (
                <tr key={i} className="group">
                    {mealPlan.meals.map((meal, j) =>
                        <td key={j} className="group-hover:bg-gray-100 border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left">{meal}</td>
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    </>
);

export default MealPlanTable;
