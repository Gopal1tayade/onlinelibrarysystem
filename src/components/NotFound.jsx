import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
            <p className="text-lg mt-4">Sorry, the page you're looking for does not exist.</p>
            <Link
                to="/"
                className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
