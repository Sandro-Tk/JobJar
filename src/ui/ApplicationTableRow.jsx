import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";
import { statusStyles } from "../utils/constants";
import { useArchiveApplication } from "../features/archive/useArchiveApplication";

function ApplicationTableRow({ application }) {
    const { archiveApplication, isArchiving } = useArchiveApplication();

    function handleArchive() {
        if (application.status === "Archived") return;
        archiveApplication(application.id);
    }

    return (
        <tr className="border-t hover:bg-gray-50 transition">
            <td className="px-4 py-3">{application.company}</td>
            <td className="px-4 py-3">{application.position}</td>
            <td
                className={`flex justify-center mt-2 text-xs font-medium items-center capitalize px-2 py-1 rounded-2xl ${
                    statusStyles[application.status]
                }`}
            >
                {application.status}
            </td>
            <td className="px-4 py-3">{formatDate(application.applied_at)}</td>
            <td className="flex px-4 py-3 gap-[20px] justify-around">
                <Link
                    to={`/application?id=${application.id}`}
                    className="text-sm text-blue-600 hover:underline"
                >
                    View
                </Link>
                {application.status !== "Archived" && (
                    <button
                        onClick={handleArchive}
                        className="text-sm text-gray-700 hover:text-gray-900 hover:underline disabled:opacity-50 cursor-pointer"
                        disabled={isArchiving}
                    >
                        Archive
                    </button>
                )}
            </td>
        </tr>
    );
}

export default ApplicationTableRow;
