const MealTypePill = ({ mealType }) => {
    const colourClass = () => ({
        "breakfast": "green",
        "main": "blue",
        "snack": "red"
    })[mealType] || "gray";

    const styles = `text-xs text-white bg-${colourClass()}-500 rounded-2xl inline-block px-2 py-1`;

    return (
        <span className={styles}>{mealType}</span>
    );
};

export default MealTypePill;
