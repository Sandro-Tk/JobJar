import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";
import { statusStyles } from "../utils/constants";

function ApplicationItem({ id, company, position, status, applied_at }) {
    return (
        <Link
            to={`/application?id=${id}`}
            className="flex items-center justify-between bg-white border rounded-lg px-6 py-4 shadow transition transform hover:shadow-md hover:-translate-y-0.5 hover:bg-gray-50 group"
        >
            <div className="flex flex-col gap-1">
                <h3 className="text-md font-semibold text-gray-800 group-hover:text-blue-700">
                    {company}
                </h3>
                <p className="text-sm text-gray-600">{position}</p>
                <p className="text-xs text-gray-400">
                    <span className="font-medium">Applied:</span>{" "}
                    {applied_at ? formatDate(applied_at) : "N/A"}
                </p>
            </div>

            <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyles[status]}`}
            >
                {status}
            </span>
        </Link>
    );
}

export default ApplicationItem;
