import React, { useState, useEffect } from 'react';
import '../App.css';
import './toggleTheme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function ToggleMode() {
    const [darkMode, setDarkMode] = useState(false);

    // Use effect to apply the theme on component mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        console.log(storedTheme);
        if (storedTheme) {
            document.body.className = storedTheme;
            setDarkMode(storedTheme === 'dark-mode');
        }
    }, []);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        const newTheme = newDarkMode ? 'dark-mode' : 'light-mode';
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme); // Store theme preference in localStorage
    };

    return (
        <div className="toggle-container">
            <span style={{ color: darkMode ? 'grey' : 'white' }}><FontAwesomeIcon icon={faSun} /></span>
            <span className="toggle">
                <input
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    id="checkbox"
                    type="checkbox"
                />
                <label htmlFor="checkbox" />
            </span>
            <span style={{ color: darkMode ? 'white' : 'grey' }}><FontAwesomeIcon icon={faMoon} /></span>
        </div>
    );
}

export default ToggleMode;
