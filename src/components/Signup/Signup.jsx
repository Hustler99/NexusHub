/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Signup() {
  const [ErrMsg, setErrMsg]=useState("");
  const [Loading, setLoading] = useState(true)
  let navigate= useNavigate();
  function sendtoApi(values) {
    setLoading(false)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
      .then(({ data }) => {
        console.log(data);
        // eslint-disable-next-line no-cond-assign
        if(data.message="success")
          {
            navigate("/signin")
          }
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        setLoading(true)
      });
  }

  function validationSchema() {
    return Yup.object({
      name: Yup.string().min(3, 'Name must be at least 3 characters').max(20).required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .matches(/^[A-Z][a-zA-Z0-9@]{6,}$/, 'Password must start with a capital letter and be at least 7 characters long')
        .required('Password is required'),
      rePassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Re-Password is required')
    });
  }

  let register = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
    },
    validationSchema,
    onSubmit(values) {
      sendtoApi(values);
    }
  });

  return (
    <>
      <h3 className='text-center nex-auth mb-3'>Nexus<span className='hub-auth'>Hub</span></h3>
      <div className="container main-panel mb-4 mobview w-25">
        <h4 className='mt-3 mb-3'>Sign Up</h4>
        <div className='container-fluid x mb-3'></div>
        <form onSubmit={register.handleSubmit} className='' action="">
          <label className='my-2' htmlFor="name">Name</label>
          <input
            onBlur={register.handleBlur}
            onChange={register.handleChange}
            placeholder='Name'
            className='form-control'
            type="text"
            name="name"
            id="name"
          />
          {register.errors.name && register.touched.name ? (
            <div className="alert alert-danger box-valid mt-2" role="alert">
              {register.errors.name}
            </div>
          ) : ""}

          <label className='my-2' htmlFor="email">Email</label>
          <input
            onBlur={register.handleBlur}
            onChange={register.handleChange}
            placeholder='Email'
            className='form-control'
            type="email"
            name="email"
            id="email"
          />
          {register.errors.email && register.touched.email ? (
            <div className="alert alert-danger box-valid mt-2" role="alert">
              {register.errors.email}
            </div>
          ) : ""}

          <label className='my-2' htmlFor="password">Password</label>
          <input
            onBlur={register.handleBlur}
            onChange={register.handleChange}
            placeholder='Password'
            className='form-control'
            type="password"
            name="password"
            id="password"
          />
          {register.errors.password && register.touched.password ? (
            <div className="alert alert-danger box-valid mt-2" role="alert">
              {register.errors.password}
            </div>
          ) : ""}

          <label className='my-2' htmlFor="rePassword">Re-Password</label>
          <input
            onBlur={register.handleBlur}
            onChange={register.handleChange}
            placeholder='Re-Password'
            className='form-control mb-3'
            type="password"
            name="rePassword"
            id="rePassword"
          />
          {register.errors.rePassword && register.touched.rePassword ? (
            <div className="alert alert-danger box-valid mt-2" role="alert">
              {register.errors.rePassword}
            </div>
          ) : ""}

          <p className='text-muted form-guide'>The password must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character. Spaces are not allowed.</p>

          <button
            disabled={!(register.dirty && register.isValid)}
            className='w-100 mb-4 btn btn btnForm'
            type="submit"
          >
            {Loading?"Sign Up" : <i className="fa fa-spinner fa-spin"></i>}
          </button>
        </form>
        {ErrMsg? <div className="alert alert-dark" role="alert">
{ErrMsg}
</div> : " " }
      </div>
    </>
  );
}
