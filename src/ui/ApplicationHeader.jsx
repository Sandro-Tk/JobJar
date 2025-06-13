function ApplicationHeader({ onDelete, onEdit }) {
    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
                Application Details
            </h2>

            <div className="flex gap-2">
                <button
                    onClick={onEdit}
                    className="px-4 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300"
                >
                    Edit
                </button>

                <button
                    onClick={onDelete}
                    className="px-4 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ApplicationHeader;
