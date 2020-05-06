import React from 'react';
import logo from '../src/images/logo.gif';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-about-container">
        <a className="mail-link" href="mailto:info@laurasolano.com">info@laurasolano.com</a>
        <div className="social-networks-container">
          <a href="" className="social-network-link">LinkenIn</a>
          <a href="" className="social-network-link">Instagram</a>
          <a href="" className="social-network-link">Facebook</a>
          <a href="" className="social-network-link">Beehance</a>
        </div>
      </div>
      <div className="footer-menu-container">
        <span className="footer-menu-item">Branding</span>
        <span className="footer-menu-item">Digital</span>
        <span className="footer-menu-item">Editorial</span>
        <span className="footer-menu-item">Otros</span>
        <span className="footer-menu-item">Sobre mi</span>
        <span className="footer-menu-item">test</span>
      </div>
    </footer>
  )
}

export default Footer;