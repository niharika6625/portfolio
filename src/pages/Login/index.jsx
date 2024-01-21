import {useState} from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import StyledLoginWrapper from './StyledLogin';
import { validationSignInSchema } from '../../utils/validations/authValidation';


const Login= ()=> {

    // const [formData, setFormData] =useState({username: '', password: ''});
    const [ openToast, setOpenToast] = useState({status: false, message: '', type: ''});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData();
//     for (var key in formData) {
//         if (formData.hasOwnProperty(key)) {
//           data.append(key, formData[key]);
//         }
//       }
//     console.log({
//       username: data.get('username'),
//       password: data.get('password'),
//     });
//     submit(data)
//   };

  const submit = async (data) => {

    const result = await axios
      .post(
        `https://dummyjson.com/auth/login`, data
      )
      .then((data) => {
        console.log("Success:", data);
        setOpenToast({status: true, message: 'Login Successful', type: 'success'})
        localStorage.setItem('auth', JSON.stringify(data.data))
        return data;
      })
      .catch((error) => {
        setOpenToast({status: true, message: error.response.data.message, type: 'error'})
        console.error("Error:", error.response.data.message);
      });
  };

  const handleValueChange =(event)=>{
    formik.setFieldValue(event.target.name, event.target.value)
    console.log(event.target.name, event.target.value)
    // switch(key){
    //     case 'username':
    //         setFormData((prevState) => ({...prevState,username: value}))
    //         break;
    //     case 'password':
    //         setFormData((prevState) => ({...prevState,password: value}))
    //         break;
    //     default:
    //         break;
    // }
        
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
    alert('values', values);
    console.log('username', username, errUsername, tucUsername)
  }

  const formik = useFormik({
    initialValues: {
        username: '',
        password: '',
    },
    validationSchema: validationSignInSchema,
    onSubmit: submitHandler,
  });

  const {
    handleSubmit, 
    values: {username, password} = {},
    errors: {
        username: errUsername,
        password: errPassword,
    },
    touched: {
        username: tucUsername = false,
        password: tucPassword = false,
    }
  } = formik
  console.log('username', username, errUsername, tucUsername)
  return (
    <>
    <StyledLoginWrapper>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email Address"
              name="username"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={(event) => handleValueChange(event)}
              error={tucUsername && Boolean(errUsername)}
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
              error={errPassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

            <div>username: 'kminchelle', password: '0lelplR',</div>
          </Box>
        </Box>
      </Container>
      </StyledLoginWrapper>
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

export default Login;


