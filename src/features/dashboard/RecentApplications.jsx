import { useApplications } from "../allApplications/useApplications";
import ApplicationItem from "../../ui/ApplicationItem";
import { useNavigate } from "react-router-dom";
import NoApplications from "../../ui/NoApplications";
import SubmitButton from "../../ui/SubmitButton";

function RecentApplications() {
    const { applications } = useApplications();

    const navigate = useNavigate();

    const sortedApps = [...applications].sort(
        (a, b) => new Date(b.applied_at) - new Date(a.applied_at)
    );

    const recentApps = sortedApps.slice(0, 5);

    function handleRedirect() {
        navigate("/all_applications");
    }

    return (
        <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Your Recent Applications
            </h2>
            <div className="space-y-4">
                {recentApps.map((app) => (
                    <ApplicationItem key={app.id} {...app} />
                ))}
            </div>
            {recentApps.length <= 0 && <NoApplications />}

            {recentApps.length === 5 && (
                <SubmitButton onClick={handleRedirect} className="mt-3 w-4">
                    See all
                </SubmitButton>
            )}
        </div>
    );
}

export default RecentApplications;
