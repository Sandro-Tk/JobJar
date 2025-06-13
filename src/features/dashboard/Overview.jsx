import { FiFileText, FiCalendar, FiThumbsUp, FiXCircle } from "react-icons/fi";
import OverviewCard from "../../ui/OverviewCard";

const cardData = [
    {
        label: "Total Applications",
        value: 0,
        icon: FiFileText,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        label: "Interviews",
        value: 0,
        icon: FiCalendar,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        label: "Offers",
        value: 0,
        icon: FiThumbsUp,
        color: "text-green-600",
        bg: "bg-green-50",
    },
    {
        label: "Rejections",
        value: 0,
        icon: FiXCircle,
        color: "text-red-600",
        bg: "bg-red-50",
    },
];

function Overview() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {cardData.map((card) => (
                <OverviewCard card={card} key={card.label} />
            ))}
        </div>
    );
}

export default Overview;
