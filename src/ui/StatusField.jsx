import { STATUS_OPTIONS } from "../utils/constants";

function StatusField({
    label,
    error,
    hideAllOption = false,
    hideArchiveOption = false,
    ...rest
}) {
    let options = STATUS_OPTIONS;

    if (hideAllOption) {
        options = options.filter((status) => status !== "All");
    }

    if (hideArchiveOption) {
        options = options.filter((status) => status !== "Archived");
    }

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
