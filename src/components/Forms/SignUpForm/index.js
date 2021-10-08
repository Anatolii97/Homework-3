import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(3, 'Too short for name!')
    .max(50, 'Too long for name!')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(50, 'Too long for password!')
    .required('Password is required'),
});

export const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <span>Name</span>
        <TextField
          fullWidth
          id="name"
          name="name"
          label=""
          margin="normal"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      <span>Email</span>
        <TextField
          fullWidth
          id="email1"
          name="email"
          label=""
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <span>Password</span>
        <TextField
          fullWidth
          id="password1"
          name="password"
          label=""
          margin="normal"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="success" variant="contained" fullWidth type="submit" size="large">
        SIGN UP
        </Button>
      </form>
    </div>
  );
};
