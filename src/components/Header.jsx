import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import {Link, useNavigate} from 'react-router-dom';
import Logonew from "../assets/images/whitelogo.png";
import {URL} from '../helpers/constants';
import StyledHeaderWrapper from './StyledHeader'
const {
  HOME,
} = URL;


export default function Header() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path)
  }
  return (
    <StyledHeaderWrapper >
      <div className="header-content container-c">
        <div>
          <div onClick={()=> handleNavigate(HOME)}><img src={Logonew} alt="logo" /></div>
        </div>
        <div className="header-link">
          <ul className="links">
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Tech Stack</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="right-side-link">
          <Stack spacing={2} direction="row">
            <IconButton
            //onClick={handleClick}
            >
              <GitHubIcon fontSize="large"></GitHubIcon>
            </IconButton>
            <IconButton
            //onClick={handleClick}
            >
              <LinkedInIcon fontSize="large"></LinkedInIcon>
            </IconButton>
          </Stack>
        </div>
      </div>
    </StyledHeaderWrapper>
  );
}
