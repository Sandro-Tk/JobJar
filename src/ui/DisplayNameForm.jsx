import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import supabase from "../services/supabase";
import InputField from "../ui/InputField";
import FormButton from "../ui/FormButton";
import SpinnerMini from "../ui/SpinnerMini";

function DisplayNameForm({ user }) {
    const [fullName, setFullName] = useState(
        user.user_metadata?.display_name || ""
    );
    const [isSaving, setIsSaving] = useState(false);
    const queryClient = useQueryClient();

    async function handleUpdateName(e) {
        e.preventDefault();
        setIsSaving(true);

        const { error } = await supabase.auth.updateUser({
            data: { display_name: fullName },
        });

        if (error) {
            toast.error("Failed to update name");
        } else {
            toast.success("Name updated");
            queryClient.invalidateQueries({ queryKey: ["user"] });
        }

        setIsSaving(false);
    }

    return (
        <form onSubmit={handleUpdateName} className="space-y-4">
            <InputField
                label="Email address"
                id="email"
                value={user.email}
                disabled
                className="w-full border rounded px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
            />

            <InputField
                label="Full name"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                error={
                    fullName.trim().length === 0
                        ? { message: "Name is required" }
                        : null
                }
            />

            <div className="flex justify-end gap-2">
                <FormButton
                    type="button"
                    onClick={() =>
                        setFullName(user.user_metadata?.display_name || "")
                    }
                    className="px-4 py-2 rounded border border-gray-300 text-sm cursor-pointer"
                >
                    Cancel
                </FormButton>

                <FormButton
                    type="submit"
                    disabled={isSaving}
                    className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 text-sm cursor-pointer"
                >
                    {isSaving ? <SpinnerMini /> : "Update account"}
                </FormButton>
            </div>
        </form>
    );
}

export default DisplayNameForm;
