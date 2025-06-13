import { useNavigate } from "react-router-dom";
import ApplicationItem from "../../ui/ApplicationItem";

const applications = [
    {
        id: 1,
        company: "Acme Inc.",
        position: "Frontend Developer",
        status: "applied",
        appliedAt: "2025-06-10",
    },
    {
        id: 2,
        company: "Globex Corp.",
        position: "Product Designer",
        status: "interview",
        appliedAt: "2025-06-08",
    },
    {
        id: 3,
        company: "Initech",
        position: "Backend Engineer",
        status: "offer",
        appliedAt: "2025-06-05",
    },
    {
        id: 4,
        company: "Umbrella Corp.",
        position: "QA Tester",
        status: "rejected",
        appliedAt: "2025-06-04",
    },
    {
        id: 5,
        company: "Stark Industries",
        position: "DevOps Engineer",
        status: "applied",
        appliedAt: "2025-06-01",
    },
];


const sortedApps = [...applications].sort(
    (a, b) => new Date(b.appliedAt) - new Date(a.appliedAt)
);

const recentApps = sortedApps.slice(0, 5);

function RecentApplications() {
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
