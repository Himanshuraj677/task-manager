import React, { useState } from 'react';
import './LinkForm.css';

const LinkForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customShortUrl, setCustomShortUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ original_url: originalUrl, shortened_url: customShortUrl }),
      });

      const result = await response.json();

      if (response.ok) {
        setShortenedUrl(result.shortened_url);
      } else {
        alert(result.message || 'Failed to create link');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form className="link-form" onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter the URL to shorten"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter custom short link (optional)"
        value={customShortUrl}
        onChange={(e) => setCustomShortUrl(e.target.value)}
      />
      <button type="submit">Shorten URL</button>
      {shortenedUrl && (
        <div className="result">
          <p>Your shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a>
        </div>
      )}
    </form>
  );
};

export default LinkForm;
