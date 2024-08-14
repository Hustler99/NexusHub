/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Nexus<span>Hub</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link btn   btnAuth " aria-current="page" to="signin">Login</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link btn  btnAuth ms-5  " aria-current="page" to="signup">Register</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='container-fluid x mb-3 '></div>


    <Outlet/>
    </>
  )
}
