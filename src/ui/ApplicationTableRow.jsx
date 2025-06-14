import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

export default function ApplicationTableRow({ application }) {
    return (
        <tr className="border-t hover:bg-gray-50 transition">
            <td className="px-4 py-3">{application.company}</td>
            <td className="px-4 py-3">{application.position}</td>
            <td className="px-4 py-3 capitalize text-blue-600">
                {application.status}
            </td>
            <td className="px-4 py-3">{formatDate(application.applied_at)}</td>
            <td className="px-4 py-3 text-right">
                <Link
                    to={`/application?id=${application.id}`}
                    className="text-sm text-blue-600 hover:underline"
                >
                    View
                </Link>
            </td>
        </tr>
    );
}
