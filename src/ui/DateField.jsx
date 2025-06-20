import { format, parseISO, isAfter } from "date-fns";

function DateField({ label, error, register, name }) {
    const today = format(new Date(), "yyyy-MM-dd");

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type="date"
                className="input"
                {...register(name, {
                    required: true,
                    validate: (value) =>
                        !isAfter(parseISO(value), parseISO(today)) ||
                        "Date cannot be in the future",
                })}
                defaultValue={today}
                max={today}
            />
            {error && (
                <p className="text-red-500 text-sm">
                    {error.message || "Required"}
                </p>
            )}
        </div>
    );
}

export default DateField;
