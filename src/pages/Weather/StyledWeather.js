import { styled } from '@mui/material/styles';

const StyledWeather = styled('div')(
  () => `
    .pageOuterWrapper {
        background-image: url(https://res.cloudinary.com/devlam0a6/image/upload/v1713355746/weather-light_ycn6rq.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    
    .pageWrapper {
        height: 100vh;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
        display: flex;
    }
    
    .pageContentWrap {
        background-color: #ffffff87;
        width: 60%;
        margin: auto;
        height: 70vh;
    }
    
    .searchBlock {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 100px 0px;
        margin-bottom: 10px;
        font-size: 20px;
    }
    
    .searchBlock #searchBar {
        width: 25%;
        margin: 0px 30px;
        font-size: 18px;
        padding: 5px 10px;
        border: none;
        outline: none;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 16px 0px 16px 0px;
        border-bottom: 3px solid #42446e;
        color: #313131;
        font-weight: 300;
    }
    
    #searchBar:focus {
        background-color: rgba(255, 255, 255, 0.6);
    }
    
    .searchBlock #searchBtn {
        width: 100px;
        border: 2px solid #42446e;
        color: #787676;
        height: 33px;
        font-weight: bolder;
        border-radius: 3px;
    }
    
    .displayBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 40px;
        margin-top: 95px;
        align-items: center;
        color: white;
        text-shadow: 2px 5px rgb(0 0 0 / 60%);
    }
    
    .displayBlock img {
        margin: 0px 15px;
    }
    
  .errorPara {
    text-align: center;
    color: red;
    padding-right: 100px;
    font-size: 19px;
  }
`,
);

export default StyledWeather;
