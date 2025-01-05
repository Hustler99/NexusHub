/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Signin() {
  const [ErrMsg, setErrMsg]=useState("");
  const [Loading, setLoading] = useState(true)
  let navigate= useNavigate();
  function sendtoApi(values) {
    setLoading(false)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
      .then(({ data }) => {
        console.log(data);
        // eslint-disable-next-line no-cond-assign
        if(data.message="success")
          {
            localStorage.setItem("token", data.token)
            navigate("/home")
            console.log(data)
          }
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        setLoading(true)
      });
  }

  function validationSchema() {
    return Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .matches(/^[A-Z][a-zA-Z0-9@]{6,}$/, 'Password must start with a capital letter and be at least 7 characters long')
        .required('Password is required'),
    });
  }

  let login = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit(values) {
      sendtoApi(values);
    }
  });

  return (
    <>
      <div className="container main-panel mb-4 w-25 mobview">
        <h4 className='mt-3 mb-3'>Login</h4>
        <div className='container-fluid x mb-3'></div>
        <form onSubmit={login.handleSubmit} className='' action="">
         

          <label className='my-2' htmlFor="email">Email</label>
          <input
            onBlur={login.handleBlur}
            onChange={login.handleChange}
            placeholder='Email'
            className='form-control'
            type="email"
            name="email"
            id="email"
          />
          {login.errors.email && login.touched.email ? (
            <div className="alert alert-danger box-valid mt-2" role="alert">
              {login.errors.email}
            </div>
          ) : ""}

          <label className='my-2' htmlFor="password">Password</label>
          <input
            onBlur={login.handleBlur}
            onChange={login.handleChange}
            placeholder='Password'
            className='form-control'
            type="password"
            name="password"
            id="password"
          />
          {login.errors.password && login.touched.password ? (
            <div className="alert alert-danger box-valid mt-2" role="alert">
              {login.errors.password}
            </div>
          ) : ""}


          <p className='text-muted form-guide'>The password must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character. Spaces are not allowed.</p>

          <button
            disabled={!(login.dirty && login.isValid)}
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
