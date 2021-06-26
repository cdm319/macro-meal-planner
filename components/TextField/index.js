const TextField = ({ label, id }) => (
    <label className="block text-left">
        <span className="text-gray-700">{label}</span>
        <input type="text" id={id} name={id} placeholder={label.toLowerCase()} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
    </label>
);

export default TextField;
