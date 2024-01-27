import * as Yup from 'yup';

const validationSignInSchema = Yup.object({
    username: Yup
        .string()
        .required('This field is required')
        .min(2, 'Minimum 2 characters')
        .max(30, 'Maximum 30 characters'),
    password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password is too short - should be 6 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .matches(/\d/, 'Password must contain at least one numeric digit.')
});


const validationSignupSchema = Yup.object({
    name: Yup
        .string()
        .required('This field is required')
        .min(2, 'Minimum 2 characters')
        .max(30, 'Maximum 30 characters'),
    email: Yup.string()
        .email('Email is invalid')
        .required('This field is required'),
    password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password is too short - should be 6 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .matches(/\d/, 'Password must contain at least one numeric digit.'),
    confirmPassword: Yup
        .string()
        .required('No confirm password provided.')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export { validationSignInSchema, validationSignupSchema };