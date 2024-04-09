import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import navIcon from '../assets/images/whitelogo.png';
import { updateUserInfo } from '../store/reducers/authentication/authentication';

export default function Header() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let loginUserInfo = useSelector((state) => state.authentication.userInfo);

  const logOutUser = () => {
    dispatch(updateUserInfo(null));
    navigate('/login');
  };

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Align the top of the element with the top of the viewport
      inline: 'nearest', // Scroll to the nearest edge of the viewport
      scrollPadding: {
        top: 100,
      },
    });
  };
  return (
    <div className="page-header-wrap">
      <div className="navbar-header">
        <Link to="/">
          <img src={navIcon} alt="" />
        </Link>
      </div>
      <div className="navbar-content">
        <ul>
          <li onClick={() => handleScroll('about')}>About</li>
          <li onClick={() => handleScroll('techStack')}>Tech Stack</li>
          <li onClick={() => handleScroll('projects')}>Projects</li>
          <li onClick={() => handleScroll('contact')}>Contact</li>
        </ul>
      </div>
      <div className="navbar-footer">
        <a href="https://github.com/niharika6625">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://in.linkedin.com/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        {loginUserInfo == null ? (
          ''
        ) : (
          <i
            className="fa-solid fa-right-from-bracket"
            id="logoutIcon"
            onClick={() => logOutUser()}
          ></i>
        )}
      </div>
    </div>
  );
}
