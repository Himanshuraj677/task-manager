import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TrackLink = () => {
    const { shortened_url } = useParams();
    const navigate = useNavigate();
    // Function to get battery and browser info
    const getBatteryInfo = async () => {
        if (navigator.getBattery) {
            const battery = await navigator.getBattery();
            return {
                level: (battery.level * 100) + '%',
                charging: battery.charging ? 'Yes' : 'No'
            };
        }
        return { level: 'Unknown', charging: 'Unknown' };
    };

    const getBrowserInfo = () => {
        return navigator.userAgent;
    };

    // Fetch the redirect URL and send tracking data
    useEffect(() => {
        const trackAndRedirect = async () => {
            const batteryInfo = await getBatteryInfo();
            const browserInfo = getBrowserInfo();

            try {
                console.log(`${process.env.REACT_APP_API_URL}/link/redirect/${shortened_url}`)
                const response = await fetch(`${process.env.REACT_APP_API_URL}/link/redirect/${shortened_url}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        battery_info: batteryInfo,
                        browser_info: browserInfo,
                        // Add other tracking information if needed
                    }),
                });

                if (response.ok) {
                    const { original_url } = await response.json();
                    window.location.replace(original_url);
                    // Redirect to the original URL
                } else {
                }
            } catch (error) {
                navigate("/link/not-found")
                console.error('Error fetching redirect URL:', error);
            }
        };

        trackAndRedirect();
    }, [navigate, shortened_url]);

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
};

export default TrackLink;
