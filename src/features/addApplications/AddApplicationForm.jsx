import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateApplication } from "./useCreateApplication";
import InputField from "../../ui/InputField";
import StatusField from "../../ui/StatusField";
import TextAreaField from "../../ui/TextAreaField";
import DateField from "../../ui/DateField";
import SubmitButton from "../../ui/SubmitButton";
import SpinnerMini from "../../ui/SpinnerMini";

function AddApplicationForm() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            status: "Applied",
        },
    });

    const { isCreating, createNewApplication } = useCreateApplication();

    const onSubmit = (data) => {
        createNewApplication(data, {
            onSuccess: () => {
                reset();
                navigate("/dashboard");
            },
        });
    };

    return (
        <div className="max-w-2xl mx-auto bg-white border shadow rounded p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Add New Application
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <InputField
                    label="Company"
                    disabled={isCreating}
                    {...register("company", { required: true })}
                    error={errors.company}
                />
                <InputField
                    label="Position"
                    disabled={isCreating}
                    {...register("position", { required: true })}
                    error={errors.position}
                />
                <InputField
                    label="Location"
                    disabled={isCreating}
                    {...register("location")}
                />
                <DateField
                    label="Date Applied"
                    register={register}
                    name="applied_at"
                    error={errors.applied_at}
                />
                <StatusField
                    hideAllOption
                    label="Status"
                    {...register("status", { required: true })}
                    error={errors.status}
                />
                <InputField
                    label="Link"
                    disabled={isCreating}
                    {...register("link")}
                />
                <TextAreaField
                    label="Notes"
                    disabled={isCreating}
                    {...register("notes")}
                />

                <SubmitButton disabled={isCreating}>
                    {isCreating ? <SpinnerMini /> : "Add Application"}
                </SubmitButton>
            </form>
        </div>
    );
}

export default AddApplicationForm;
