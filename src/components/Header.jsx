import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Logonew from "../images/whitelogo.png";
import "./header.css";

export default function Header() {
  return (
    <div className="header-wrap">
      <div className="header-wrapper container-c">
        <div>
          <img src={Logonew} alt="logo" />
        </div>
        <div className="header-link">
          <ul className="links">
            <li>
              <a href="">About me</a>
            </li>
            <li>
              <a href="">Tech Stack</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div>
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
    </div>
  );
}
