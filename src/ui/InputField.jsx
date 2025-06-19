import Input from "./Input";

function InputField({ label, error, id, className, ...props }) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <Input id={id} {...props} className={className} />
            {error && (
                <p className="text-red-500 text-sm">
                    {error.message || "Required"}
                </p>
            )}
        </div>
    );
}
export default InputField;
