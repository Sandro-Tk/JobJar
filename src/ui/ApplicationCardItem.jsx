import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";
import { statusStyles } from "../utils/constants";

function ApplicationCardItem({ application }) {
    return (
        <Link
            to={`/application?id=${application.id}`}
            className="block border rounded-md p-4 shadow-sm bg-white hover:bg-gray-50 transition"
        >
            <h3 className="font-semibold text-lg text-gray-800">
                {application.company}
            </h3>
            <p className="text-sm text-gray-600">{application.position}</p>
            <p className="text-xs text-gray-500 mt-1">
                Applied: {formatDate(application.applied_at)}
            </p>
            <p
                className={`mt-2 text-sm font-medium capitalize  px-3 py-1 rounded-full w-fit ${
                    statusStyles[application.status]
                }`}
            >
                {application.status}
            </p>
        </Link>
    );
}

export default ApplicationCardItem;
