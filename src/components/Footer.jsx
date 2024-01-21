import React from "react";
import Logonew from "../assets/images/blacklogo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import StyledFooterWrapper from './StyledFooter'

export default function Footer() {
  return (
    <StyledFooterWrapper>
      <div className="footer-wrapper container-c">
        <div className="footer-image">
          <img src={Logonew} alt="logo" display="flex" />
        </div>
        <div className="footer-content">
          <div className="footer-section-1">
            <h5 className="pr-1">+46 70428 5348</h5>
            <h5>niharika0108@gmail.com</h5>
            <Stack spacing={2} direction="row">
              <IconButton
              //onClick={handleClick}
              >
                <GitHubIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                ></GitHubIcon>
              </IconButton>
              <IconButton
              //onClick={handleClick}
              >
                <LinkedInIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                ></LinkedInIcon>
              </IconButton>
            </Stack>
          </div>
          <hr></hr>
          <div className="footer-section-2">
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
        </div>
      </div>
    </StyledFooterWrapper>
  );
}
