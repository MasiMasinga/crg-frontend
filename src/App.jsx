import React, { useState, useEffect } from "react";

// Styles
import "./App.css";

// Components
import Timeline from "./components/Timeline";
import NoDataAvailable from "./components/NoDataAvailable";
import ErrorLoading from "./components/ErrorLoading";
import Loader from "./components/Loader";

function App() {
    const [timelineData, setTimelineData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://arthurfrost.qflo.co.za/php/getTimeline.php"
            );
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setTimelineData(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loader />}
            {!loading && !error && <ErrorLoading error={error} />}
            {!loading && !error && !timelineData && <NoDataAvailable />}
            {!loading && !error && timelineData && (
                <Timeline data={timelineData} />
            )}
        </>
    );
}

export default App;
