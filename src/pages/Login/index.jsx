import React, { useState, useEffect } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import StyledLogin from './StyledLogin';
import CustomButton from '../../components/CustomButton.jsx';
import ProjectModal from '../../components/ProjectModal';
import { URL } from '../../helpers/constants/constants.js';
import { PROJECT_DESCRIPTION } from '../../helpers/constants/projectDescription';
import { updateUserInfo } from '../../store/reducers/authentication/authentication';

const { login } = PROJECT_DESCRIPTION;
const { TODO_LIST } = URL;

export default function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClickClose = () => {
    setOpenDialog(false);
  };

  const params = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const usersListsArray = useSelector((state) => state.authentication.usersList);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(updateUserInfo(null));
  });

  useEffect(() => {
    if (isGuest) {
      loginUser();
    }
  }, [isGuest]);

  const loginUser = () => {
    console.log('function', inputEmail, inputPassword);
    let errorFound = false;
    if (inputEmail == '') {
      errorFound = true;
      setEmailErrorMessage('Email is Required!');
    }
    if (inputPassword == '') {
      errorFound = true;
      setPasswordErrorMessage('Password is Required!');
    }
    if (!errorFound) {
      let data = usersListsArray.find(
        (item) => item.email == inputEmail && item.password == inputPassword,
      );

      if (data && data.status === 'approved') {
        switch (data.type) {
          case 'admin':
            dispatch(updateUserInfo(data));
            navigate('/dashboard');
            break;
          default: {
            dispatch(updateUserInfo(data));
            if (params.page == 'quiz') {
              navigate('/quizDashboard');
            } else {
              navigate({
                TODO_LIST,
              });
            }
            break;
          }
        }
      } else if (data && data.status != 'approved') {
        setErrorMessage('Your status is still not approved');
      } else {
        setErrorMessage('Invalid login details');
      }
    }
  };

  const handleGuestLogin = (type = 'user') => {
    if (type == 'admin') {
      setInputEmail('admin@gmail.com');
      setInputPassword('admin123');
    } else {
      setInputEmail('guest@yopmail.com');
      setInputPassword('guest123');
    }
    setIsGuest(true);
  };

  return (
    <StyledLogin>
      <div className="loginPageWrap">
        <ProjectModal
          open={openDialog}
          onClose={handleClickClose}
          project={login}
          color={'#42446e'}
          handleClickOpen={handleClickOpen}
        />
        <section>
          <h1 className="loginFormHeading">Login</h1>
          <div className="login-form">
            <h4 className="inputHeading">Email</h4>
            <div className="username-input">
              <i className="fas fa-user loginIcon"></i>
              <input
                className="loginInput"
                type="text"
                placeholder="Type your email"
                value={inputEmail}
                onChange={(e) => {
                  setErrorMessage('');
                  setEmailErrorMessage('');
                  setInputEmail(e.target.value);
                }}
              />
              <p className="error">{emailErrorMessage}</p>
            </div>
            <h4 className="inputHeading">Password</h4>
            <div className="password-input">
              <i className="fas fa-lock loginIcon"></i>
              <Input
                sx={{
                  my: 1,
                  py: 0,
                  fontSize: '18px',
                }}
                className="loginInput"
                type={showPassword ? 'text' : 'password'}
                placeholder="Type your password"
                value={inputPassword}
                onChange={(e) => {
                  setErrorMessage('');
                  setPasswordErrorMessage('');
                  setInputPassword(e.target.value);
                }}
                id="standard-adornment-password"
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <p className="error">{passwordErrorMessage}</p>
            </div>
          </div>
          <CustomButton onClick={loginUser} text="Login" backgroundColor="yellow" textTransform />
          <p className="error">{errorMessage}</p>
          <div className="alternative-signup">
            <p>
              Not a member?{' '}
              <Link to={`/register/${params.page}`}>
                <span className="loginSpan">Sign-up</span>
              </Link>
            </p>
          </div>
          <div>or</div>
          <div className="guest-btn-wrap">
            <p>Login as</p>
            <button className="guestbtn" onClick={() => handleGuestLogin()}>
              Guest User
            </button>
            <button className="guestbtn" onClick={() => handleGuestLogin('admin')}>
              Guest Admin
            </button>
          </div>
        </section>
      </div>
    </StyledLogin>
  );
}
