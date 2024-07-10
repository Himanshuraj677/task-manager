import React, { useState } from 'react';
import NavBar from '../../component/NavBar/NavBar';
import Typewriter from '../../services/typewriter/Typewriter';
import './HomePage.css';

const HomePage = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [resultUrl, setResultUrl] = useState('');
    const [trackingId, setTrackingId] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true when the form is submitted

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/link`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ original_url: originalUrl, shortened_url: shortenedUrl }),
            });

            const result = await response.json();
            console.log(result);
            if (response.ok) {
                setResultUrl(result.shortened_url);
                setTrackingId(result.trackingId);
                setOriginalUrl('');
                setShortenedUrl('');
            } else {
                alert(result.message || 'Failed to create link');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false); // Set loading to false after the response is received
        }
    };

    return (
        <div className="home-page">
            <NavBar />
            <header className="home-header">
                <div className="header-content">
                    <h1>Welcome to LinkShortener</h1>
                    <Typewriter text="Create and manage your short links with ease" delay={100} />
                </div>
            </header>
            <main className="home-main">
                <div className="link-form-container">
                    <h2>Create a Short Link</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="url"
                            placeholder="Enter the original URL"
                            value={originalUrl}
                            onChange={(e) => setOriginalUrl(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Custom shortened URL (optional)"
                            value={shortenedUrl}
                            onChange={(e) => setShortenedUrl(e.target.value)}
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? 'Creating...' : 'Create Link'}
                        </button>
                    </form>
                    {resultUrl && (
                        <div className="result">
                            <h3>Your shortened URL:</h3>
                            <a href={resultUrl} target="_blank" rel="noopener noreferrer">{resultUrl}</a>
                            <h4>Tracking ID:</h4>
                            <p>{trackingId}</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default HomePage;
