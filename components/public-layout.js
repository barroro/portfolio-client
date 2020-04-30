import React from 'react';

export default function PublicLayout({ children }) {
  return (
    <div className="public-layout">
      <nav>
        <div className="nav-toggle-menu">
          <span>logo</span>
        </div>
        <div className="nav-title">
          <span className="horizontal-position">laura</span>
          <span className="vertical-position">solano</span>
        </div>
        {/* <div className="container-nav-menu">
          <span>menu</span>
        </div> */}
      </nav>
      <span className="mail-floating">test@gmail.com</span>
      {children}
      {/* <footer>
        <div className="social-networks-container">
          <ul>
            <li>
              <a href="" className="social-network-icon">ic</a>
            </li>
            <li>
              <a href="" className="social-network-icon">ic</a>
            </li>
            <li>
              <a href="" className="social-network-icon">ic</a>
            </li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
}
