import React from 'react';
import './Footer.scss';
import Linkedin from '../../Assets/Linkedin.png';

const Footer = () => {

    return(
        <div className="footer-container">
            <header className="footer-header">
                <h3>Copyright Ornella Sciarrillo</h3>
            </header>

            <div className='footer-content'>
                <a href="https://www.linkedin.com/in/ornella-sciarrillo-679588177/">
                <img className="linkedin" src={Linkedin} alt='linkedin'/>
                </a>
            </div>
        </div>

    )
}

export default Footer;