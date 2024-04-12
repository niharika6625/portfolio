/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import './assets/css/app.scss';
import github from './assets/images/app/techStack/akar-icons_github-fill.svg';
import bootstrap from './assets/images/app/techStack/logos_bootstrap.svg';
import git from './assets/images/app/techStack/logos_git-icon.svg';
import react from './assets/images/app/techStack/logos_react.svg';
import sass from './assets/images/app/techStack/logos_sass.svg';
import mui from './assets/images/app/techStack/material-ui.svg';
import css from './assets/images/app/techStack/vscode-icons_file-type-css.svg';
import html from './assets/images/app/techStack/vscode-icons_file-type-html.svg';
import js from './assets/images/app/techStack/vscode-icons_file-type-js-official.svg';
import vsCode from './assets/images/app/techStack/vscode-icons_file-type-vscode.svg';
import numberGame from './assets/images/bg2.jpeg';
import profileImg from './assets/images/profile.niharika.jpg';
import CustomButton from './components/CustomButton.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ProjectsCard from './components/ProjectsCard.jsx';

export default function App() {
  const insightRef = useRef(null);

  const scrollToInsight = () => {
    if (insightRef.current) {
      insightRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="page-data-wrap-seprator">
      <Header />
      <div className="page-content-wrap">
        <div className="block-1-wrap" id="about">
          <div className="block-1-header">
            <h1>
              Hi 👋,
              <br />
              I am Niharika Gupta, <br />I use ReactJS to create amazing websites. <br /> Welcome to
              my Portfolio!
            </h1>
            <CustomButton
              onClick={scrollToInsight}
              text="Discover More"
              backgroundColor="yellow"
              textTransform
            />
          </div>
          <div className="block-1-content">
            <img src={profileImg} alt="" />
          </div>
        </div>

        <div className="block-2-wrap" id="techStack">
          <div className="block-2-header">
            <h1>My Tech Stack</h1>
            <p>A glimpse into the technologies shaping my development journey...</p>
          </div>
          <div className="block-2-content">
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: 'center',
              }}
            >
              <Grid item xs={6} sm={3} md={2} lg={2}>
                <div className="icon-wrapper">
                  <img src={html} alt="html-logo" />
                  <p className="cardTitle">HTML</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={2} lg={2}>
                <div className="icon-wrapper">
                  <img src={css} alt="css-logo" />
                  <p className="cardTitle">CSS</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={2} lg={2}>
                <div className="icon-wrapper">
                  <img src={js} alt="js-logo" />
                  <p className="cardTitle">JavaScript</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={2} lg={2}>
                <div className="icon-wrapper">
                  <img src={react} alt="react-logo" />
                  <p className="cardTitle">React</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={2} lg={2}>
                <div className="icon-wrapper">
                  <img src={mui} alt="mui-logo" />
                  <p className="cardTitle">Material-UI</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={2} lg={2}>
                <div className="icon-wrapper">
                  <img src={bootstrap} alt="bootstrap-logo" />
                  <p className="cardTitle">Bootstrap</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={2} lg={2}>
                <div className="icon-wrapper">
                  <img src={sass} alt="sass-logo" />
                  <p className="cardTitle">Sass</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={2} lg={2}>
                <div className="icon-wrapper">
                  <img src={github} alt="github-logo" />
                  <p className="cardTitle">GitHub</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={2} lg={2}>
                <div className="icon-wrapper">
                  <img src={git} alt="git-logo" />
                  <p className="cardTitle">Git</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={2} lg={2}>
                <div className="icon-wrapper">
                  <img src={vsCode} alt="vscode-logo" />
                  <p className="cardTitle">VS Code</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="block-3-wrap" id="projects">
          <div className="block-3-header">
            <h1>Projects</h1>
            <p>Welcome to my playground of projects, where creativity meets functionality.</p>
            <p>
              Delve into a variety of practice projects designed to showcase my skills in frontend
              development, from crafting captivating interfaces to optimizing data retrieval.
            </p>
          </div>
          <div className="block-3-content ">
            <Grid container rowSpacing={4} spacing={2}>
              <Grid
                style={{
                  margin: 'auto',
                }}
                item
                xs={12}
                md={6}
                lg={4}
                className="projectCard"
              >
                <Card
                  sx={{
                    minHeight: '400px',
                    margin: 'auto',
                  }}
                >
                  <ProjectsCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i4v_H1Gajo5yd5JDEj71dfKkxdBAIHkEIg&usqp=CAU'
                    }
                    tech="ReactJs, MUI, HTML, CSS, Fetch API, Javascript"
                    heading={'Browse and Buy'}
                    description={
                      'Experience online shopping: browse, add/remove items from your cart, apply discounts, and easily view your total at checkout.'
                    }
                    previewLink={'/productsCart'}
                    codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
                  />
                </Card>
              </Grid>
              <Grid
                style={{
                  margin: 'auto',
                }}
                item
                xs={12}
                md={6}
                lg={4}
                className="projectCard"
              >
                <Card
                  sx={{
                    minHeight: '400px',
                    margin: 'auto',
                  }}
                >
                  <ProjectsCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMRIB9W1OZVIkFKFQveri1bC5p01NR7Y6qw&usqp=CAU'
                    }
                    tech="ReactJs, Redux, HTML, CSS, Javascript, Chart.js, MUI"
                    heading={'Quiz App'}
                    description={
                      'Interactive quiz app with diverse topics, user profiles, scoring, and performance tracking for engaging learning experiences.'
                    }
                    previewLink={'/login/quiz'}
                    codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
                  />
                </Card>
              </Grid>
              <Grid
                style={{
                  margin: 'auto',
                }}
                item
                xs={12}
                md={6}
                lg={4}
                className="projectCard"
              >
                <Card
                  sx={{
                    minHeight: '400px',
                    margin: 'auto',
                  }}
                >
                  <ProjectsCard
                    image={'https://miro.medium.com/max/1400/1*fm6XPKNS9l9ZAyWZqsqyVA.png'}
                    tech="ReactJs, Redux, MUI, HTML, Javascript, SCSS"
                    heading={'Admin Login/Register Page'}
                    description={
                      'This app shows efficient admin interface for streamlined user profile management, allowing add, edit, or delete actions.'
                    }
                    previewLink={'/login'}
                    codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
                  />
                </Card>
              </Grid>
              <Grid
                style={{
                  margin: 'auto',
                }}
                item
                xs={12}
                md={6}
                lg={4}
                className="projectCard"
              >
                <Card
                  sx={{
                    minHeight: '400px',
                    margin: 'auto',
                  }}
                >
                  <ProjectsCard
                    image={
                      'https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/0x0.jpg?format=jpg&width=360'
                    }
                    tech="ReactJs, Redux, React-router, MUI, HTML, SCSS, Javascript"
                    heading={'To-do Lists'}
                    description={
                      'An advanced web-based to-do app with editing, deleting, and task completion functionalities for organized task management.'
                    }
                    previewLink={'/login/todoLists'}
                    codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
                  />
                </Card>
              </Grid>
              <Grid
                style={{
                  margin: 'auto',
                }}
                item
                xs={12}
                md={6}
                lg={4}
                className="projectCard"
              >
                <Card
                  sx={{
                    minHeight: '400px',
                    margin: 'auto',
                  }}
                >
                  <ProjectsCard
                    image={
                      'https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                    }
                    tech="ReactJs, Redux, HTML, SCSS, Fetch API, MUI, Javascript"
                    heading={'Weather App'}
                    description={
                      'City-based weather application that allows you to effortlessly find temperature and current conditions instantly for any location worldwide.'
                    }
                    previewLink={'/weatherApp'}
                    codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
                  />
                </Card>
              </Grid>
              <Grid
                style={{
                  margin: 'auto',
                }}
                item
                xs={12}
                md={6}
                lg={4}
                className="projectCard"
              >
                <Card
                  sx={{
                    minHeight: '400px',
                    margin: 'auto',
                  }}
                >
                  <ProjectsCard
                    image={numberGame}
                    tech="ReactJs, Redux, React-router, HTML, SCSS, MUI, Javascript"
                    heading={'The Number Puzzle'}
                    description={
                      'Test your gaming skills by arranging numbers from 1-15 in order, offering a fun and challenging gameplay experience.'
                    }
                    previewLink={'/number-game'}
                    codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
                  />
                </Card>
              </Grid>
              <Grid
                style={{
                  margin: 'auto',
                }}
                item
                xs={12}
                md={6}
                lg={4}
                className="projectCard"
              >
                <Card
                  sx={{
                    minHeight: '400px',
                    margin: 'auto',
                  }}
                >
                  <ProjectsCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNoDI4n6eBEwev1exL4_Rg06YKmtC_p1f8A&usqp=CAU'
                    }
                    tech="ReactJs, HTML, CSS, Javascript, Fetch API"
                    heading={'API Data Explorer'}
                    description={
                      'Demonstrating dynamic data fetching from various APIs upon user request, offering real-time information retrieval.'
                    }
                    previewLink={'/fetch-data'}
                    codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
                  />
                </Card>
              </Grid>
              <Grid
                style={{
                  margin: 'auto',
                }}
                item
                xs={12}
                md={6}
                lg={4}
                className="projectCard"
              >
                <Card
                  sx={{
                    minHeight: '400px',
                    margin: 'auto',
                  }}
                >
                  <ProjectsCard
                    image={
                      'https://cdn.dribbble.com/users/1615584/screenshots/17578107/media/55cd7c269f8c140c2f19281e30e8abb3.jpg?compress=1&resize=400x300'
                    }
                    tech="ReactJs, HTML, CSS"
                    heading={'Component Craft Lab'}
                    description={
                      'Here you can see hands-on exercises building various components from scratch, fostering expertise in app development.'
                    }
                    previewLink={'/component-design'}
                    codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
                  />
                </Card>
              </Grid>
              <Grid
                style={{
                  margin: 'auto',
                }}
                item
                xs={12}
                md={6}
                lg={4}
                className="projectCard"
              >
                {/* <ProjectsCard
                image={
                  'https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg'
                }
                tech="ReactJs, HTML, CSS, Javascript"
                heading={'JS Practice'}
                description={'It is the template of the methods used while learning javascript.'}
                previewLink={'https://fir-project1-bc3fc.web.app/pages/jsPractice.html'}
                codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
              /> */}
                <Card
                  sx={{
                    minHeight: '400px',
                    margin: 'auto',
                  }}
                >
                  <ProjectsCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5esvtT-D1LVQLGkL_laiVZHe3hnio7zhvBw&usqp=CAU'
                    }
                    tech="ReactJs, HTML, CSS, Javascript"
                    heading={'CSS Mastery Studio'}
                    description={
                      'Dive into detailed CSS practice, exploring templates and methods for mastering advanced styling techniques.'
                    }
                    previewLink={'/css-practice'}
                    codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
                  />
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
        <div ref={insightRef} className="block-4-wrap" id="insight">
          <div className="block-4-header">
            <h1>My personal insight</h1>
            <p>
              {`Embarking on my journey, I am a dedicated Frontend Developer based in Gothenburg, Sweden.
                Converting user requirements into working projects is my daily motivation.
                My dedication to crafting accessible user interfaces and my commitment to lifelong learning drives me to excel 
                in collaborative environments. When I am not at the computer, you will find me improving my Swedish skills or enjoying mindful walks. 
                Before restarting my career in coding, I delved into my love for papercrafts, adding a unique dimension to my professional path. 
                Nurturing my own brand, I've cultivated leadership, teamwork, and prioritization skills, 
                managing multiple tasks while training more craft enthusiasts. Now, poised to re-enter the workforce, 
                I'm eager to contribute my diverse skills and experiences.`}
            </p>
          </div>
        </div>
      </div>
      <div className="page-footer-wrap">
        <Footer />
      </div>
    </div>
  );
}
