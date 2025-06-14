import { useForm } from "react-hook-form";
import { useUpdateApplication } from "./useUpdateApplication";
import StatusField from "../../ui/StatusField";

function UpdateApplicationForm({ application, onClose }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            company: application.company,
            position: application.position,
            location: application.location,
            status: application.status,
            link: application.link,
            notes: application.notes,
        },
    });

    const { updateApplication, isLoading } = useUpdateApplication();

    const onSubmit = (data) => {
        updateApplication(
            { id: application.id, updates: data },
            {
                onSuccess: () => {
                    onClose();
                },
            }
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Company</label>
                <input
                    className="input"
                    {...register("company", { required: true })}
                />
                {errors.company && (
                    <p className="text-red-500 text-sm">Required</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium">Position</label>
                <input
                    className="input"
                    {...register("position", { required: true })}
                />
                {errors.position && (
                    <p className="text-red-500 text-sm">Required</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium">Location</label>
                <input className="input" {...register("location")} />
            </div>

            <div>
                <StatusField
                    label="Status"
                    error={errors.status && "Required"}
                    hideAllOption
                    {...register("status", { required: true })}
                />
            </div>

            <div>
                <label className="block text-sm font-medium">Link</label>
                <input className="input" {...register("link")} />
            </div>

            <div>
                <label className="block text-sm font-medium">Notes</label>
                <textarea className="input" rows="3" {...register("notes")} />
            </div>

            <div className="flex gap-2 justify-end">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    {isLoading ? "Saving..." : "Save"}
                </button>
            </div>
        </form>
    );
}

export default UpdateApplicationForm;
