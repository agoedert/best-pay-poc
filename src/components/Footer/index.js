import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div>Producidas con ingredientes 100% naturales y sin preservantes!</div>
      <div className="logo-facebook">
        <a
          href="https://www.facebook.com/lekkerjarmermeladas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="30px"
            height="30px"
            src="/assets/images/facebook.png"
            alt="facebook"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
