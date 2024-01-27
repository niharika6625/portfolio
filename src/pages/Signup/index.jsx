import {useState} from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {useNavigate, Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import StyledSignupWrapper from './StyledSignup';
import { validationSignupSchema } from '../../utils/validations/authValidation';
import {URL} from '../../helpers/constants';
import {generatedToken} from '../../utils/common';

const {LOGIN} = URL;

const Signup = () => {
    const navigate = useNavigate()

    const [ openToast, setOpenToast] = useState({status: false, message: '', type: ''});

  const submit = async (data) => {

    const {confirmPassword, ...remainData} = data;
    remainData.token = generatedToken

    await axios
      .post(
        `https://portfolio-4339f-default-rtdb.europe-west1.firebasedatabase.app/users.json`, remainData
      )
      .then((data) => {
        console.log("Success:", data);
        setOpenToast({status: true, message: 'Sign Up Successful', type: 'success'})
        formik.resetForm()
        setTimeout(() => {
            navigate(LOGIN)
        }, 2000)
        return data;
      })
      .catch((error) => {
        setOpenToast({status: true, message: 'Sign up failed', type: 'error'})
      });
  };

  const handleValueChange =(event)=>{
    formik.setFieldValue(event.target.name, event.target.value)
  }

  const handleToast = (value) => {
    setOpenToast({status: false, message: '', type: ''})
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleToast}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const submitHandler = (values) => {
    submit(values)
  }

  const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        
    },
    validationSchema: validationSignupSchema,
    onSubmit: submitHandler,
  });

  const {
    handleSubmit, 
    values: {
        email,
        password,
        confirmPassword,
        name,
       
    } = {},
    errors: {
        email: errEmail,
        password: errPassword,
        confirmPassword: errConfirmPassword,
        name: errName,
        
    },
    touched: {
        email: tucEmail = false,
        password: tucPassword = false,
        confirmPassword: tucConfirmPassword = false,
        name: tucName = false,
       
    }
  } = formik

  return (
    <>
    <StyledSignupWrapper>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoFocus
              value={name}
              onChange={(event) => handleValueChange(event)}
              error={tucName && Boolean(errName)}
              helperText={errName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => handleValueChange(event)}
              error={tucEmail && Boolean(errEmail)}
              helperText={errEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => handleValueChange(event)}
              error={tucPassword && Boolean(errPassword)}
              helperText={errPassword}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(event) => handleValueChange(event)}
              error={tucConfirmPassword && Boolean(errConfirmPassword)}
              helperText={errConfirmPassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                
                <Link to={LOGIN} variant="body2">
                  Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </StyledSignupWrapper>
      <Snackbar
        open={openToast.status}
        autoHideDuration={6000}
        onClose={handleToast}
        message={openToast.message}
        action={action}
      />
    </>
  );
}

export default Signup;


