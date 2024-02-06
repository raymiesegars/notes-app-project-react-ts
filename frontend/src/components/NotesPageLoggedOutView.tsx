import React from 'react';
import '../styles/Dark.mode.css';

const NotesPageLoggedOutView = () => {

  const isDarkMode = document.body.classList.contains('body-dark-mode');

  return (
    <div className={isDarkMode ? 'notes-page-logged-out-view' : ''}>
      <p>Please login to see your notes</p>
    </div>
   );
}

export default NotesPageLoggedOutView;