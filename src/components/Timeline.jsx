import React from "react";

// Components
import EpisodeCard from "./EpisodeCard";
import AboutSection from "./AboutSection";

const Timeline = ({ data }) => {
    const backgroundImage =
        data.Body && data.Body[0]?.Background
            ? `https://arthurfrost.qflo.co.za/${data.Body[0].Background}`
            : null;

    const backgroundOpacity =
        data.Body && data.Body[0]?.BackgroundOpacity
            ? data.Body[0].BackgroundOpacity / 100
            : 0.35;

    return (
        <div
            className="timeline-container min-h-screen relative"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {backgroundImage && (
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 bg-white z-1"
                    style={{ opacity: 1 - backgroundOpacity }}
                />
            )}
            <div className="container mx-auto p-4 relative z-2">
                {data.Body && data.Body.length > 0 && (
                    <AboutSection data={data.Body} />
                )}

                {data.Timeline && data.Timeline.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Timeline</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data.Timeline.map((episode) => (
                                <EpisodeCard
                                    key={episode.Id}
                                    episode={episode}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;
