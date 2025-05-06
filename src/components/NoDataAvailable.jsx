import React from "react";

const NoDataAvailable = () => {
    return (
        <div className="flex items-center justify-center min-h-screen min-w-full w-screen h-screen fixed inset-0 bg-gray-100">
            <div className="text-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
                <p className="text-lg font-medium text-gray-900">
                    No Data Available
                </p>
                <p className="text-gray-500 mt-2">
                    The timeline data could not be loaded.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="!bg-black mt-4 px-4 py-2 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                    Refresh
                </button>
            </div>
        </div>
    );
};

export default NoDataAvailable;
