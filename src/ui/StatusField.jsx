import { STATUS_OPTIONS } from "../utils/constants";

function StatusField({ label, error, hideAllOption = false, ...rest }) {
    const options = hideAllOption
        ? STATUS_OPTIONS.filter((status) => status !== "All")
        : STATUS_OPTIONS;

    return (
        <div>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}

            <select className="input" {...rest}>
                {options.map((status) => (
                    <option
                        key={status}
                        value={status === "All" ? "all" : status}
                    >
                        {status}
                    </option>
                ))}
            </select>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

export default StatusField;
