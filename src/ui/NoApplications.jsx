import { Link } from "react-router-dom";

function NoApplications() {
    return (
        <div className="text-center py-12 border border-dashed rounded bg-gray-50 ">
            <p className="text-gray-600  mb-4">
                You haven’t added any applications yet.
            </p>
            <Link
                to="/new_application"
                className="inline-block px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition"
            >
                Add your first application
            </Link>
        </div>
    );
}

export default NoApplications;
