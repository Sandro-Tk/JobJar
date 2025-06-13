function SelectField({ label, options, error, ...rest }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select className="input" {...rest}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm">Required</p>}
        </div>
    );
}

export default SelectField;
