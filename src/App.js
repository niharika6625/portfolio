/* eslint-disable prettier/prettier */
import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import './assets/css/app.scss';
import github from './assets/images/app/techStack/akar-icons_github-fill.svg';
import bootstrap from './assets/images/app/techStack/logos_bootstrap.svg';
import git from './assets/images/app/techStack/logos_git-icon.svg';
import react from './assets/images/app/techStack/logos_react.svg';
import sass from './assets/images/app/techStack/logos_sass.svg';
import css from './assets/images/app/techStack/vscode-icons_file-type-css.svg';
import html from './assets/images/app/techStack/vscode-icons_file-type-html.svg';
import js from './assets/images/app/techStack/vscode-icons_file-type-js-official.svg';
import vsCode from './assets/images/app/techStack/vscode-icons_file-type-vscode.svg';
import numberGame from './assets/images/bg2.jpeg';
import profileImg from './assets/images/profile.jpeg';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ProjectsCard from './components/ProjectsCard.jsx';

export default function App() {
  return (
    <div className="page-data-wrap-seprator">
      <Header />
      <div className="page-content-wrap">
        <div className="block-1-wrap">
          <div className="block-1-header">
            <h1>
              Hi 👋,
              <br />
              My name is <br /> Niharika Gupta <br />
              Reactjs Developer
            </h1>
          </div>
          <div className="block-1-content">
            <img src={profileImg} alt="" />
          </div>
        </div>

        <div className="block-2-wrap" id="techStack">
          <div className="block-2-header">
            <h1>My Tech Stack</h1>
            <p>Technologies I&apos;ve been working with recently</p>
          </div>
          <div className="block-2-content">
            <img src={github} alt="" />
            <img src={bootstrap} alt="" />
            <img src={git} alt="" />
            <img src={react} alt="" />
            <img src={sass} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={vsCode} alt="" />
          </div>
        </div>

        <div className="block-3-wrap block-2-wrap" id="projects">
          <div className="block-3-header block-2-header">
            <h1>Projects</h1>
            <p>Things I&apos;ve built so far</p>
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
               >
              <Card sx={{ 
                minHeight: '400px', margin: 'auto' 
                }}>
                <ProjectsCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i4v_H1Gajo5yd5JDEj71dfKkxdBAIHkEIg&usqp=CAU'
                  }
                  tech="ReactJs, Redux, HTML, CSS"
                  heading={'Products Cart'}
                  description={
                    'It is a products cart application in which you can add remove products in your cart.'
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
               >
              <Card sx={{
                 minHeight: '400px', margin: 'auto' 
                 }}>
                <ProjectsCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMRIB9W1OZVIkFKFQveri1bC5p01NR7Y6qw&usqp=CAU'
                  }
                  tech="ReactJs, Redux, HTML, CSS"
                  heading={'Quiz App'}
                  description={
                    'It is a advance To-do web application in which you can edit, delete and strike your tasks.'
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
               >
              <Card sx={{ 
                minHeight: '400px', margin: 'auto' 
                }}>
                <ProjectsCard
                  image={'https://miro.medium.com/max/1400/1*fm6XPKNS9l9ZAyWZqsqyVA.png'}
                  tech="ReactJs, Redux, HTML, CSS"
                  heading={'Admin Login/Register Page'}
                  description={'In this you can register and login to view dashboard'}
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
               >
              <Card sx={{ 
                minHeight: '400px', margin: 'auto' 
                }}>
                <ProjectsCard
                  image={
                    'https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/0x0.jpg?format=jpg&width=360'
                  }
                  tech="ReactJs, Redux, HTML, CSS"
                  heading={'To-do Lists'}
                  description={
                    'It is a advance To-do web application in which you can edit, delete and strike your tasks.'
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
               >
              <Card sx={{ 
                minHeight: '400px', margin: 'auto'
                 }}>
                <ProjectsCard
                  image={
                    'https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                  }
                  tech="ReactJs, Redux, HTML, CSS"
                  heading={'Weather App'}
                  description={
                    'It is an application in which you can search the temperature of any city.'
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
               >
              <Card sx={{
                 minHeight: '400px', margin: 'auto' 
                 }}>
                <ProjectsCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNoDI4n6eBEwev1exL4_Rg06YKmtC_p1f8A&usqp=CAU'
                  }
                  tech="ReactJs, Redux, HTML, CSS, Javascript"
                  heading={'Fetch Data Assignment'}
                  description={'In this the data is fetched from different APIs on request.'}
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
               >
              <Card sx={{ 
                minHeight: '400px', margin: 'auto' 
                }}>
                <ProjectsCard
                  image={
                    'https://cdn.dribbble.com/users/1615584/screenshots/17578107/media/55cd7c269f8c140c2f19281e30e8abb3.jpg?compress=1&resize=400x300'
                  }
                  tech="ReactJs, HTML, CSS"
                  heading={'Components Design'}
                  description={
                    'It is a advance To-do web application in which you can edit, delete and strike your tasks.'
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
              <Card sx={{ 
                minHeight: '400px', margin: 'auto'
                 }}>
                <ProjectsCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5esvtT-D1LVQLGkL_laiVZHe3hnio7zhvBw&usqp=CAU'
                  }
                  tech="ReactJs, HTML, CSS"
                  heading={'CSS Practice'}
                  description={'It is the template of the methods used while learning CSS.'}
                  previewLink={'/css-practice'}
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
               >
              <Card sx={{ 
                minHeight: '400px', margin: 'auto'
                 }}>
                <ProjectsCard
                  image={numberGame}
                  tech="ReactJs, Redux, HTML, CSS"
                  heading={'Number Arrange Game'}
                  description={'Arrange number in assending order.'}
                  previewLink={'/number-game'}
                  codeLink={'https://github.com/niharika6625/portfolio/tree/master'}
                />
              </Card>
            </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <div className="page-footer-wrap">
        <Footer />
      </div>
    </div>
  );
}
