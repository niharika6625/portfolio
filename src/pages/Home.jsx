import React from "react";
import Profile from "../assets/images/profile1.jpg";
import HTML from "../assets/images/HTML1.png";
import CSS from "../assets/images/css.png";
import Git from "../assets/images/github.png";
import Bootstrap from "../assets/images/bootstrap.png";
import Figma from "../assets/images/figma.png";
import Javascript from "../assets/images/javascript.webp";
import MUI from "../assets/images/mui.png";
import React1 from "../assets/images/react1.svg";
import VS from "../assets/images/VS.png";
import Sass from "../assets/images/sass.png";
import "./home.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LaptopIcon from "@mui/icons-material/Laptop";
import CodeIcon from "@mui/icons-material/Code";
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import Grid from "@mui/material/Grid";
import { projectData } from "../helpers/constants/data";

export default function Home() {
  
  return (
    <div className="page-wrapper container-c">
      <div className="section-1-wrap ">
        <div className="section-header">
          <h3 className="title">
          Hello! I'm Niharika Gupta, a web developer with a passion for art and design. <br></br>
          With a strong focus on user experience and interactivity, I take pleasure in crafting captivating 
          user interfaces for web applications.What truly drives me is the ability to transform user 
          requirements into tangible, functional products. <br></br> As a frontend developer, 
          I thrive on problem-solving, writing and optimizing code, and embracing continuous learning to stay 
          ahead of the ever-evolving web development landscape.By combining my artistic background 
          with my technical expertise, I strive to create visually stunning and seamlessly functional websites 
          that leave a lasting impression. <br></br> I am always eager to take on new challenges, collaborate 
          with diverse teams, and contribute my skills to deliver exceptional user experiences.<br></br>
          Let's work together to bring your ideas to life and create meaningful digital experiences!
          </h3>
        </div>
        <div className="section-content ">
          <img
            className="profile-img"
            src={Profile}
            alt="logo"
            display="flex"
          />
        </div>
      </div>
      <div className="section-2-tech">
        <h3> My Tech Stack </h3>
        <h5> Technologies I have been working with recently are : </h5>
        <div className="tech-images">
          <ul className="tech-wrap"> 
            <li className="tech-item">
              <img width="100px" height="100px" src={HTML} alt="logo" />
            </li>
            <li className="tech-item">
              <img width="100px" height="100px" src={CSS} alt="logo" />
            </li>
            <li className="tech-item">
              <img width="100px" height="100px" src={Javascript} alt="logo" />
            </li>
            <li className="tech-item">
              <img width="100px" height="100px" src={MUI} alt="logo" />
            </li>
            <li className="tech-item">
              <img width="100px" height="100px" src={React1} alt="logo" />
            </li>
          </ul>
          <ul className="links-2">
            <li>
              <img width="90px" height="90px" src={Git} alt="logo" />
            </li>
            <li>
              <img width="80px" height="80px" src={Bootstrap} alt="logo" />
            </li>
            <li>
              <img width="80px" height="80px" src={Figma} alt="logo" />
            </li>
            <li>
              <img width="80px" height="80px" src={VS} alt="logo" />
            </li>
            <li>
              <img width="100px" height="80px" src={Sass} alt="logo" />
            </li>
          </ul>
        </div>
      </div>
      <div className="section-3-cards">
        <h3> Projects </h3>
        <h5> Few applications that I have built to showcase my knowledge </h5>

        <div className="card">
          <Grid container 
            spacing={{xs: 2, md: 3}} 
            columns={{xs: 4, sm:8, md:12}}>
            {projectData.map(
              ({ title, description, demoLink, codeLink, imgUrl, about, newPage = false }, index) => {
                return (
                  <Grid 
                    key={index} item xs={2} sm={4} md={4}>
                    <div>
                      <Card>
                        <CardMedia
                          sx={{ height: '15rem' }}
                          image={imgUrl}
                          title="app1"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {description}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Tech Stack used : HTML, CSS
                          </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent: 'space-between'}}>
                          <a href={demoLink} target={newPage ? '_blank' : '_self'} rel="noreferrer">
                            <Button size="small" startIcon={<LaptopIcon />}>
                              Live Preview
                            </Button>
                          </a> 
                          <a href={codeLink} target="_blank" rel="noreferrer">
                            <Button size="small" startIcon={<CodeIcon />}>
                              View code
                            </Button>
                          </a>
                          <a href={about} target="_blank" rel="noreferrer">
                            <Button size="small" startIcon={<ImportContactsOutlinedIcon />}>
                              Features
                            </Button>
                          </a>
                          
                        </CardActions>
                      </Card>
                    </div>
                  </Grid>
                );
              }
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
}
