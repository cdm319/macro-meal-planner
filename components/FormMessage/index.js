const FormMessage = ({ type, message }) => {
    const colour = {
        "success": "green",
        "error": "red",
        "warning": "yellow",
        "info": "blue"
    }[type] || "gray";

    const divClasses = `transition-all duration-500 ease-in-out block mt-2 p-2 rounded-md bg-${colour}-300`;
    const spanClasses = `text-${colour}-900`;

    return (
        <div className={divClasses}>
            <span className={spanClasses}>{message}</span>
        </div>
    );
}

export default FormMessage;
