import { styled } from '@mui/material/styles';

const StyledRegister = styled('div')(
  () => `

.registerPageWrap {
    padding-top: 120px;
    min-height: 750px;
    min-width: 700px;
    background-image: radial-gradient(at 0% 50%, #aaaadb 0px, transparent 50%),
    radial-gradient(at 0% 100%, #42446e 0px, transparent 50%),
    radial-gradient(at 100% 50%, #aaaadb 0px, transparent 50%),
    radial-gradient(at 100% 100%, #42446e 0px, transparent 50%);
    background-color: #e0e0f2;
  }
  
  section {
    margin: 0 auto;
    width: 400px;
    min-height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    box-shadow: 0px 0 31px 0px rgb(0 0 0 / 10%);
  }
  
  .loginFormHeading {
    font-size: 2rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color: #e0e0f2;
    background-color: #42446e;
    padding: 20px 162px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  
  .registerFormHeading {
    font-size: 2rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color: #e0e0f2;
    background-color: #42446e;
    padding: 20px 140px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  
  .login-form {
    width: 80%;
    padding-top: 25px;
  }
  
  .inputHeading {
    margin: 20px 0 5px;
    font-size: 1.3rem;
    font-weight: 300;
  }
  
  .loginInput {
    width: calc(100% - 40px);
    font-size: 1.1rem;
    font-weight: 300;
    padding: 7px;
    border: none;
    background-color: inherit;
  }
  
  .username-input,
  .password-input {
    width: 100%;
  }
  
  .loginIcon {
    width: 30px;
    color: rgba(0, 0, 0, 0.3);
    padding-right: 10px;
  }
  
  .login-form>p {
    width: 100%;
    font-size: 1.1rem;
    text-align: right;
    margin-top: 5px;
    font-weight: 300;
  }
  
  .guest-btn-wrap {
    padding: 20px;
    padding-top: 5px;
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .guest-btn-wrap>p{
    padding-right: 15px;
  }
  
  .guestbtn {
    border: none;
    padding: 5px 10px;
    border-radius: 10px;
    background: unset;
    color: #775997;
    width: max-content;
    cursor: pointer;
    text-decoration: underline;
  }
  
  .alternative-signup {
    margin: 5px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .alternative-signup-register{
    margin: 20px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .alternative-signup>p {
    width: 90%;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 300;
  }
  
  .alternative-signup-register>p {
    width: 90%;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 300;
  }
  `,
);

export default StyledRegister;
