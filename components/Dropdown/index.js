const Dropdown = ({ label, id, options }) => (
    <label className="block text-left">
        <span className="text-gray-700">{label}</span>
        <select name={id} id={id} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    </label>
);

export default Dropdown;
