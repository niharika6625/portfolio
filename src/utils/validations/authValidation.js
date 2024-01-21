import * as Yup from 'yup';

const validationSignInSchema = Yup.object({
    username: Yup
        .string()
        .required('This field is required')
        .min(2, 'Minimum 2 characters')
        .max(30, 'Maximum 30 characters'),
    password: Yup
        .string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export { validationSignInSchema };