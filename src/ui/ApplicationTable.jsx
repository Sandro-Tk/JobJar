import ApplicationTableRow from "../ui/ApplicationTableRow";

function ApplicationTable({ applications }) {
    return (
        <table className="min-w-full text-sm border bg-white rounded shadow overflow-hidden">
            <thead className="bg-gray-100 text-left text-gray-600 uppercase text-xs">
                <tr>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Position</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Applied</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {applications.map((app) => (
                    <ApplicationTableRow key={app.id} application={app} />
                ))}
            </tbody>
        </table>
    );
}

export default ApplicationTable;
