function ApplicationHeader({ onDelete, isDeleting }) {
    return (
        <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-gray-800">
                Application Details
            </h2>
            <div className="flex gap-2">
                <button
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => alert("Edit not implemented yet")}
                >
                    Edit
                </button>
                <button
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={onDelete}
                    disabled={isDeleting}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ApplicationHeader;
