import React from "react";

function AboutSection({ data }) {
    return (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">About</h2>

            {data.map((item) => (
                <div key={item.Id} className="mb-4">
                    <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: item.About }}
                    />

                    {item.Background && (
                        <div className="mt-2 flex justify-center">
                            <p className="text-sm text-gray-500">
                                <img
                                    src={`https://arthurfrost.qflo.co.za/${item.Background}`}
                                    alt={item.Background}
                                    className="h-16 w-32"
                                    style={{
                                        opacity: item.BackgroundOpacity,
                                    }}
                                />
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default AboutSection;
