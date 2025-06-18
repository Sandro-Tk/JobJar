import { useUser } from "../../features/authentication/useUser";
import DisplayNameForm from "../../ui/DisplayNameForm";
import PasswordUpdateForm from "../../ui/PasswordUpdateForm";
import ExportDataButton from "../../ui/ExportDataButton";

export default function UserSettings() {
    const { user } = useUser();

    return (
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-12 text-gray-800">
            <h1 className="text-3xl font-semibold">Update your account</h1>

            <section className="space-y-4">
                <h2 className="text-xl font-medium">Update user data</h2>
                <div className="bg-white border rounded-lg shadow p-6 space-y-6">
                    <DisplayNameForm user={user} />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-medium">Update password</h2>
                <div className="bg-white border rounded-lg shadow p-6 space-y-6">
                    <PasswordUpdateForm />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-medium">Export your data</h2>
                <div className="bg-white border rounded-lg shadow p-6">
                    <ExportDataButton />
                </div>
            </section>
        </div>
    );
}
