import React from 'react';

const Footer = () => {
  return (
    <div className='footer' id ="footer">
      <p> 
        &copy;{(new Date().getFullYear())} FIND YOUR CITY | All rights reserved | Terms Of Service | Privacy
      </p>
    </div>
  );
};
export default Footer;
