import background1 from "../../assets/images/bg1.jpeg";
import background2 from "../../assets/images/bg2.jpeg";
import { URL_WITH_BASENAME } from "./index";
const { 
  WEATHER,
  WEATHER_DETAILS,
  NUMBER_DASHBOARD,
  LOGIN
} = URL_WITH_BASENAME

const projectData = [
    {
      title: "Weather App",
      imgUrl: background1,
      description:
        "WeatherReact: A responsive weather application developed in React, delivering real-time forecasts and an immersive user experience.",
      demoLink: WEATHER,
      codeLink: "project 1",
      about: WEATHER_DETAILS,
      newPage: true,
    },
    {
      title: "Number-Arrange Game",
      imgUrl: background2,
      description:
        "The Game of 15 Numbers: A captivating number arrangement game developed in React using Redux Toolkit, challenging players to strategically arrange numbers from 1-15 in ascending order.",
      demoLink: NUMBER_DASHBOARD,
      codeLink: "project 1",
      about: "key features",
      newPage: true,
    },
    {
      title: "Login",
      imgUrl: background1,
      description: "Login",
      demoLink: LOGIN,
      codeLink: "project 1",
      about: WEATHER_DETAILS,
      newPage: true,
    },
    {
      title: "Number-Arrange Game",
      imgUrl: background2,
      description:
        "The Game of 15 Numbers: A captivating number arrangement game developed in React using Redux Toolkit, challenging players to strategically arrange numbers from 1-15 in ascending order.",
      demoLink: NUMBER_DASHBOARD,
      codeLink: "project 1",
      about: "key features",
      newPage: false,
    }
  ];

  export {projectData}