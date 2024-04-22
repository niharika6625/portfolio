import { styled } from '@mui/material/styles';

const StyledUser = styled('div')(
  () => `
  .dashboardWrap {
    text-align: center;
    padding-bottom: 100px;
  
    .usersList {
      margin: 0px auto;
      font-size: 19px;
      border-collapse: separate;
      border-spacing: 0 15px;
      background-color: #ffffffd1;
      padding: 40px;
      border-radius: 7px;
  
      caption {
        font-size: 0px;
        margin: 15px 4px;
        margin-top: 100px;
        text-align: right;
      }
  
      .bodyRow {
        background-color: white;
        box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
        border-radius: 5px;
      }
    }
  
    th,
    td {
      padding: 10px 25px;
    }
  
    .dashboardEditBtn {
      padding: 3px 15px;
      font-size: 16px;
      margin: auto 13px;
      background: #42446e;
      color: white;
      border-radius: 3px;
      cursor: pointer;
    }
  
    .dashboardChart {
      width: 50%;
      margin: 80px auto;
      padding: 80px;
      background-color: white;
    }
  }
  
  .userInfoDiv {
    display: flex;
    list-style: none;
    font-size: 25px;
  }
  `,
);

export default StyledUser;
