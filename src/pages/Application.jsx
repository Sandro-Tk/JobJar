import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useApplication } from "../features/allApplications/useApplication";
import { useDeleteApplication } from "../features/allApplications/useDeleteApplication";
import Spinner from "../ui/Spinner";
import formatDate from "../utils/formatDate";
import ApplicationField from "../ui/ApplicationField";
import ApplicationHeader from "../ui/ApplicationHeader";
import Modal from "../ui/Modal";
import UpdateApplicationForm from "../features/allApplications/UpdateApplicationForm";
import ConfirmAction from "../ui/ConfirmAction";

function Application() {
    const [searchParams] = useSearchParams();
    const [isEditing, setIsEditing] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const id = searchParams.get("id");
    const navigate = useNavigate();

    const { deleteApplication, isDeleting } = useDeleteApplication();
    const {
        data: app,
        isLoading,
        isError,
        error,
        isSuccess,
    } = useApplication(id);

    const handleDelete = () => {
        deleteApplication(id, {
            onSuccess: () => navigate("/dashboard"),
        });
    };

    if (!id) {
        return (
            <p className="text-gray-500 text-sm">No application selected.</p>
        );
    }

    if (isLoading || isDeleting) return <Spinner />;

    if (isError) {
        return (
            <p className="text-red-600">
                Error: {error?.message || "Unknown error"}
            </p>
        );
    }

    if (isSuccess && !app) {
        return <p className="text-gray-500 text-sm">Application not found.</p>;
    }

    if (!app) return null;

    return (
        <div className="max-w-2xl mx-auto bg-white border shadow rounded p-6 space-y-4">
            <ApplicationHeader
                onDelete={() => setShowConfirm(true)}
                onEdit={() => setIsEditing(true)}
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

            {isEditing && (
                <Modal onClose={() => setIsEditing(false)}>
                    <h2 className="text-lg font-semibold mb-4">
                        Edit Application
                    </h2>
                    <UpdateApplicationForm
                        application={app}
                        onClose={() => setIsEditing(false)}
                    />
                </Modal>
            )}
            {showConfirm && (
                <ConfirmAction
                    message="Are you sure you want to delete this application?"
                    onCancel={() => setShowConfirm(false)}
                    onConfirm={() => {
                        handleDelete();
                        setShowConfirm(false);
                    }}
                />
            )}
        </div>
    );
}

export default Application;
