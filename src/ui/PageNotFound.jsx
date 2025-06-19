import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function PageNotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <HiOutlineExclamationCircle className="text-blue-600 text-6xl mb-4" />
            <p className="text-gray-600 mb-6 max-w-md">
                Sorry, the page you’re looking for doesn’t exist or has been
                moved.
            </p>
            <Link
                to="/dashboard"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
            >
                Go back to Dashboard
            </Link>
        </div>
    );
}

export default PageNotFound;
