import Overview from "../features/dashboard/Overview";
import RecentApplications from "../features/dashboard/RecentApplications";

export default function Dashboard() {
    return (
        <div className="p-4">
            <Overview />
            <RecentApplications />
        </div>
    );
}
