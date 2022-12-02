import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <h5 className="text-center text-white">
            {
                new Date().getFullYear()
            }
          </h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;