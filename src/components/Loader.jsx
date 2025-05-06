import React from "react";

// React Icons
import { BiLoaderAlt } from "react-icons/bi";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen min-w-full w-screen h-screen fixed inset-0 bg-gray-100">
            <div className="text-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
                <BiLoaderAlt className="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" />
                <p className="text-lg font-medium text-black">
                    Loading data...
                </p>
                <p className="text-black mt-2">Please wait</p>
            </div>
        </div>
    );
};

export default Loader;
