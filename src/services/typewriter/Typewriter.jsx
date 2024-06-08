import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;
        setDisplayText(text ? text[0] : '');
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prevText) => prevText + text.charAt(index));
                index++;
            } else {
                setDisplayText(text ? text[0] : '');
                index = 0;
            }
        }, delay);

        return () => clearInterval(interval);
    }, [text, delay]);

    return (
        <div className="typewriter">{displayText}</div>
    );
};

export default Typewriter;
