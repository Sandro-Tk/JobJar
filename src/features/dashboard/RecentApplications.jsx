import { useApplications } from "../allApplications/useApplications";
import ApplicationItem from "../../ui/ApplicationItem";
import HeaderButton from "../../ui/HeaderButton";

function RecentApplications() {
    const { applications } = useApplications();

    const sortedApps = [...applications].sort(
        (a, b) => new Date(b.applied_at) - new Date(a.applied_at)
    );

    const recentApps = sortedApps.slice(0, 5);

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
        </div>
    );
}

export default RecentApplications;
