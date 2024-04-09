import React from 'react';

export default function Footer() {
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className="footer-header" id="contact">
        <span>niharika0108@gmail.com</span>
        <span>+46 704285348</span>
        <span>
          <a href="https://github.com/niharika6625">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/niharika6625/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </span>
      </div>
      <div className="footer-content">
        <ul>
          <li onClick={() => handleScroll('about')}>About</li>
          <li onClick={() => handleScroll('techStack')}>Tech Stack</li>
          <li onClick={() => handleScroll('projects')}>Projects</li>
          <li onClick={() => handleScroll('contact')}>Contact</li>
        </ul>
        <p>
          Designed and built by <span>Niharika Gupta</span>
        </p>
      </div>
    </>
  );
}
