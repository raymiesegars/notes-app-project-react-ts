import React, { useState, useEffect } from 'react';
import '../styles/Dark.mode.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('body-dark-mode');
      
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('body-dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <button
      className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
  

}

export default DarkModeToggle;