import React from 'react';
import "./Header.scss"

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="nav">
            <h2 className="nav-logo">LOGO</h2>
            <ul className="nav__ul">
              <li className="nav__ul-list">
                <a href="/" className="nav__ul-list-link">Home</a>
              </li>
              <li className="nav__ul-list">
                <a href="/task" className="nav__ul-list-link">Task</a>
              </li>
              <li className="nav__ul-list">
                <a href="/" className="nav__ul-list-link">About</a>
              </li>
              <li className="nav__ul-list">
                <a href="/" className="nav__ul-list-link">Contact</a>
              </li>
              <li className="nav__ul-list">
                <a href="/" className="nav__ul-list-link">Link-5</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;