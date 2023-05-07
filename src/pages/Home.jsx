import React from "react";
import Profile from "../images/profile.jpeg";
import HTML from "../images/HTML1.png";
import CSS from "../images/css.png";
import Git from "../images/github.png";
import Bootstrap from "../images/bootstrap.png";
import Figma from "../images/figma.png";
import Javascript from "../images/javascript.webp";
import MUI from "../images/mui.png";
import React1 from "../images/react1.svg";
import VS from "../images/VS.png";
import Sass from "../images/sass.png";
import background1 from "../images/bg1.jpeg";
import background2 from "../images/bg2.jpg";
import background3 from "../images/bg3.jpg";
import background4 from "../images/bg4.jpeg";
import background5 from "../images/bg5.jpg";
import "./home.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LaptopIcon from "@mui/icons-material/Laptop";
import CodeIcon from "@mui/icons-material/Code";
import Grid from "@mui/material/Grid";

export default function Home() {
  const projectData = [
    {
      title: "Weather App",
      imgUrl: { background1 },
      description:
        "It is a products cart application in which you can add remove products in your cart.",
      demoLink: "project 1",
      codeLink: "project 1",
    },
    {
      title: "Number Game",
      imgUrl: { background2 },
      description:
        "It is a quiz application in which you can signUp and attempt any quiz and can check your score.XYZxyzXYZxyz.",
      demoLink: "project 1",
      codeLink: "project 1",
    },
    {
      title: "Quiz App",
      imgUrl: { background3 },
      description:
        "It is a advance To-do web application in which you can edit, delete and strike your tasks.It is a advance To-do web application in which you can edit, delete and strike your tasks.",
      demoLink: "project 1",
      codeLink: "project 1",
    },
    {
      title: "Data Fetch Application",
      imgUrl: { background4 },
      description:
        "In this the data is fetched from different APIs on request.",
      demoLink: "project 1",
      codeLink: "project 1",
    },
    {
      title: "To-do List",
      imgUrl: { background5 },
      description:
        "It is a advance To-do web application in which you can edit, delete and strike your tasks.",
      demoLink: "project 1",
      codeLink: "project 1",
    },
    {
      title: "Checkout Page",
      imgUrl: { background1 },
      description:
        "It is a advance To-do web application in which you can edit, delete and strike your tasks.",
      demoLink: "project 1",
      codeLink: "project 1",
    },
  ];
  return (
    <div className="body-wrapper container-c">
      <div className="section-1 ">
        <div className="title">
          <h3>
            Hi. I am Niharika Gupta. <br></br>I am a web developer with art and
            designing background. With a good grasp of user experience and
            interactivity, I enjoy designing the user interface for web
            applications. <br></br>
            My keen interest lies in translating user requirements into a
            working product.
            <br></br>
            As a frontend developer, I enjoy solving problems, fixing and
            writing code and learning new things everyday.
          </h3>
        </div>
        <div className="image-wrap">
          <img
            width="150px"
            height="150px"
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
          <ul className="links-1">
            <li>
              <img width="100px" height="100px" src={HTML} alt="logo" />
            </li>
            <li>
              <img width="100px" height="100px" src={CSS} alt="logo" />
            </li>
            <li>
              <img width="100px" height="100px" src={Javascript} alt="logo" />
            </li>
            <li>
              <img width="100px" height="100px" src={MUI} alt="logo" />
            </li>
            <li>
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
      <div classname="section-3-cards">
        <h3> Projects </h3>
        <h5> Few applications that I have built to showcase my knowledge </h5>

        <div class="card">
          <Grid container rowSpacing={1}>
            {projectData.map(
              ({ title, description, demoLink, codeLink, imgUrl }) => {
                return (
                  <Grid item xs={4}>
                    <div>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          sx={{ height: 140 }}
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
                        <CardActions>
                          <a href={demoLink} target="_blank" rel="noreferrer">
                            <Button size="small" startIcon={<LaptopIcon />}>
                              Live Preview
                            </Button>
                          </a>
                          <a href={codeLink} target="_blank" rel="noreferrer">
                            <Button size="small" startIcon={<CodeIcon />}>
                              View code
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
