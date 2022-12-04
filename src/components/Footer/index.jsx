import React from 'react';
import "./Footer.scss";
import {context} from "../../context";
import { useContext } from 'react';

const Footer = () => {

  const {lang,langs}=useContext(context);
  
  const t=lang[langs];

  return (
    <>
      <footer>
        <div className="container">
          <h5 className="text-center text-white">
            {
                new Date().getFullYear()
            }
          </h5>
          <h6 className='text-center text-white'>{t.copyright}</h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;