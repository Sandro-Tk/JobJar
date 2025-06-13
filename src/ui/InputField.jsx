import Input from "./Input";

export default function InputField({ label, error, id, ...props }) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <Input id={id} {...props} />
            {error && (
                <p className="text-red-500 text-sm">
                    {error.message || "Required"}
                </p>
            )}
        </div>
    );
}
