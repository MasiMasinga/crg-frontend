import React from "react";

// React Icons
import { BiLoaderAlt } from "react-icons/bi";

const ErrorLoading = ({ error }: { error: string }) => {
    return (
        <div className="flex items-center justify-center min-h-screen min-w-full w-screen h-screen fixed inset-0 bg-gray-100">
            <div className="text-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
                <BiLoaderAlt className="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-900">
                    Error Loading Data
                </p>
                <p className="text-red-500 mt-2">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="!bg-black mt-4 px-4 py-2 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ErrorLoading;
