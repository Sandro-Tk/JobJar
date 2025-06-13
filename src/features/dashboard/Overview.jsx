import { FiFileText, FiCalendar, FiThumbsUp, FiXCircle } from "react-icons/fi";
import { useApplications } from "../allApplications/useApplications";
import OverviewCard from "../../ui/OverviewCard";
import Spinner from "../../ui/Spinner";

function Overview() {
    const { applications, isLoading } = useApplications();

    const countByStatus = (status) =>
        applications.filter((app) => app.status === status).length;

    const total = applications.length;
    const interviews = countByStatus("Interview");
    const offers = countByStatus("Offer");
    const rejections = countByStatus("Rejected") + countByStatus("Ghosted");

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <OverviewCard
                        label="Total Applications"
                        value={total}
                        icon={FiFileText}
                        color="text-blue-600"
                        bg="bg-blue-50"
                    />
                    <OverviewCard
                        label="Interviews"
                        value={interviews}
                        icon={FiCalendar}
                        color="text-indigo-600"
                        bg="bg-indigo-50"
                    />
                    <OverviewCard
                        label="Offers"
                        value={offers}
                        icon={FiThumbsUp}
                        color="text-green-600"
                        bg="bg-green-50"
                    />
                    <OverviewCard
                        label="Rejections/Ghosted"
                        value={rejections}
                        icon={FiXCircle}
                        color="text-red-600"
                        bg="bg-red-50"
                    />
                </>
            )}
        </div>
    );
}

export default Overview;
