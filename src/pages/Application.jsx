import { useSearchParams, useNavigate } from "react-router-dom";
import { useApplication } from "../features/allApplications/useApplication";
import { useDeleteApplication } from "../features/allApplications/useDeleteApplication";
import Spinner from "../ui/Spinner";
import formatDate from "../utils/formatDate";
import ApplicationField from "../ui/ApplicationField";
import ApplicationHeader from "../ui/ApplicationHeader";

function Application() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const navigate = useNavigate();
    const { deleteApplication, isDeleting } = useDeleteApplication();

    const { data: app, isLoading, isError, error } = useApplication(id);

    const handleDelete = () => {
        deleteApplication(id, {
            onSettled: navigate("/dashboard"),
        });
        navigate("/dashboard");
    };

    if (!id)
        return (
            <p className="text-gray-500 text-sm">No application selected.</p>
        );
    if (isLoading || isDeleting) return <Spinner />;
    if (isError)
        return (
            <p className="text-red-600">
                Error: {error?.message || "Unknown error"}
            </p>
        );
    if (!app)
        return <p className="text-gray-500 text-sm">Application not found.</p>;

    return (
        <div className="max-w-2xl mx-auto bg-white border shadow rounded p-6 space-y-4">
            <ApplicationHeader
                isDeleting={isDeleting}
                onDelete={handleDelete}
            />

            <ApplicationField label="Company" value={app.company} />
            <ApplicationField label="Position" value={app.position} />
            {app.location && (
                <ApplicationField label="Location" value={app.location} />
            )}
            <ApplicationField label="Status" value={app.status} />
            <ApplicationField
                label="Applied"
                value={app.applied_at ? formatDate(app.applied_at) : "N/A"}
            />
            {app.link && (
                <ApplicationField
                    label="Link"
                    value={
                        <a
                            href={app.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {app.link}
                        </a>
                    }
                />
            )}
            {app.notes && <ApplicationField label="Notes" value={app.notes} />}
        </div>
    );
}

export default Application;
