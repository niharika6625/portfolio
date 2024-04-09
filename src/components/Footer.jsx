import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="footer-header">
        <span>+46 704285348</span>
        <span>niharika0108@gmail.com</span>
        <span>
          <a href="https://github.com/niharika6625">
            <i className="fa-brands fa-github"></i>
          </a>
          <Link to="">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <a href="https://www.linkedin.com/in/niharika6625/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </span>
      </div>
      <div className="footer-content">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>Tech Stack</li>
          </Link>
          <Link to="/">
            <li>Projects</li>
          </Link>
          <Link to="/">
            <li>Contact</li>
          </Link>
        </ul>
        <p>
          Designed and built by <span>Niharika Gupta</span>
        </p>
      </div>
    </>
  );
}
