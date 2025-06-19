function TextAreaField({ label, ...rest }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <textarea className="input" rows={3} {...rest} />
        </div>
    );
}

export default TextAreaField;
