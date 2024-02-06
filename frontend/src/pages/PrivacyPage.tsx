import React from "react";
import '../styles/Dark.mode.css';

const PrivacyPage = () => {

  const isDarkMode = document.body.classList.contains('body-dark-mode');

  return ( 
    <div className={isDarkMode ? 'privacy-page-dark' : ''}>
      <p>We care about your privacy, however we take no liability for your notes or data.</p>
    </div>
   );
}
 
export default PrivacyPage;