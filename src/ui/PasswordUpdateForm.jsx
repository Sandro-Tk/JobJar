import { useState } from "react";
import toast from "react-hot-toast";
import supabase from "../services/supabase";
import InputField from "../ui/InputField";
import FormButton from "../ui/FormButton";
import SpinnerMini from "../ui/SpinnerMini";

export default function PasswordUpdateForm() {
    const [newPassword, setNewPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);

    async function handlePasswordUpdate(e) {
        e.preventDefault();

        if (newPassword.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        if (newPassword !== confirm) {
            toast.error("Passwords do not match");
            return;
        }

        setIsUpdating(true);

        const { error } = await supabase.auth.updateUser({
            password: newPassword,
        });

        if (error) toast.error("Failed to update password");
        else {
            toast.success("Password updated");
            setNewPassword("");
            setConfirm("");
        }

        setIsUpdating(false);
    }

    return (
        <form onSubmit={handlePasswordUpdate} className="space-y-4">
            <InputField
                label="New password"
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                error={
                    newPassword && newPassword.length < 6
                        ? { message: "Must be at least 6 characters" }
                        : null
                }
            />

            <InputField
                label="Confirm password"
                id="confirmPassword"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                error={
                    confirm && confirm !== newPassword
                        ? { message: "Passwords do not match" }
                        : null
                }
            />

            <div className="flex justify-end gap-2">
                <FormButton
                    type="button"
                    onClick={() => {
                        setNewPassword("");
                        setConfirm("");
                    }}
                    className="px-4 py-2 rounded border border-gray-300 text-sm cursor-pointer"
                >
                    Cancel
                </FormButton>

                <FormButton
                    type="submit"
                    disabled={isUpdating}
                    className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 text-sm cursor-pointer"
                >
                    {isUpdating ? <SpinnerMini /> : "Update password"}
                </FormButton>
            </div>
        </form>
    );
}
