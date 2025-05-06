import React from "react";

const EpisodeCard = ({ episode }) => {
    return (
        <div className="episode-card bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center">
                {episode.Icon && (
                    <img
                        src={`https://arthurfrost.qflo.co.za/${episode.Icon}`}
                        alt={episode.Title}
                        className="w-full h-16 object-contain rounded"
                    />
                )}

                <div>
                    <h3 className="text-lg font-bold">{episode.Title}</h3>
                    <p className="text-sm text-black">{episode.Episode}</p>
                    <p className="text-sm text-black">
                        Category: {episode.Category}
                    </p>
                    <p className="text-sm text-black">
                        Date: {episode.CreateDate}
                    </p>
                </div>
            </div>

            {episode.Audio && (
                <div className="mt-4">
                    <audio controls className="w-full">
                        <source
                            src={`https://arthurfrost.qflo.co.za/${episode.Audio}`}
                            type="audio/mpeg"
                        />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}

            {episode.RemoteId && (
                <div className="mt-2">
                    <a
                        href={`https://www.youtube.com/watch?v=${episode.RemoteId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Watch on YouTube
                    </a>
                </div>
            )}
        </div>
    );
};

export default EpisodeCard;
