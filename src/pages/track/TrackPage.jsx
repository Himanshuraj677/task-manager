import React, { useState } from 'react';
import NavBar from '../../component/NavBar/NavBar';
import './TrackPage.css';

const TrackPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingDetails, setTrackingDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/link/track/${trackingId}`, {
        method: 'GET',
      });

      const result = await response.json();
      if (response.ok) {
        setTrackingDetails(result);
        setErrorMessage('');
      } else {
        setErrorMessage(result.message || 'Failed to track link');
        setTrackingDetails([]);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      setTrackingDetails([]);
    } finally {
      setLoading(false); // Set loading to false after the response is received
    }
  };

  return (
    <div className="track-page">
      <NavBar />
      <main className="track-main">
        <div className="track-form-container">
          <h2>Track a Link</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter the tracking ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Tracking...' : 'Track Link'}
            </button>
          </form>
          {errorMessage && (
            <div className="error-message">
              <p>{errorMessage}</p>
            </div>
          )}
          {trackingDetails.length > 0 && (
            <div className="link-details">
              <h3>Tracking Details:</h3>
              <table>
                <thead>
                  <tr>
                    <th>IP Address</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Browser</th>
                    <th>OS</th>
                    <th>Battery Status</th>
                    <th>User Agent</th>
                    <th>Opened At</th>
                  </tr>
                </thead>
                <tbody>
                  {trackingDetails.map((track, index) => (
                    <tr key={index}>
                      <td>{track.ip_address}</td>
                      <td>{track.country}</td>
                      <td>{track.city}</td>
                      <td>{track.browser}</td>
                      <td>{track.os}</td>
                      <td>{track.battery_status}</td>
                      <td>{track.user_agent}</td>
                      <td>{new Date(track.opened_at).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TrackPage;
