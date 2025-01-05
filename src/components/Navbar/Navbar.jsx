/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { nexusContext } from '../../context/nexusContext';

export default function Navbar() {
 let cartCounter = useContext(nexusContext)
  function signOut(){
    localStorage.clear()
    return <Navigate to="/signin"/>


  }
  useEffect(() => {
    async function getLoggedCart() {
      try {
        let data = await cartCounter.getCart();
        if (data.data) {
          cartCounter.setCounter(data.data.numOfCartItems);
        } else {
          cartCounter.setCounter(0);
        }
      } catch (error) {
        cartCounter.setCounter(0);
      }
    }
    
    getLoggedCart(); 
  }, []); 
  
  
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand mrgBtm" href="#">Agarly</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse flex-column w-100" id="navbarSupportedContent">
            <div className="upperNavBar w-100  d-flex align-items-center py-2">
              <div className="flex-grow-1 d-flex justify-content-center">
                <form className="d-flex align-items-center w-50 ms-5" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
              </div>
              <div className="d-flex  align-items-center justify-content-evenly  px-3 ">
                <div className="cartNum ">
                <NavLink to="cart"  className=" position-relative"> 
      <i className='fa-brands fa-opencart fa-2xl ' style={{color:"#001E41"}}></i>
    { <span className="position-absolute tra top-0 start-100 translate-middle badge rounded-pill bg-dark"> 
    {cartCounter.counter}
    <span className="visually-hidden">unread messages</span>
  </span> }
</NavLink>
                </div>
                <div className='LogoutBtn ms-5 '>
                  <Link onClick={()=>{
                    signOut()
                  }} className='btn btn-dark Logout-Btn' to="/signin">Logout</Link>
                </div>
              </div>
            </div>
            <ul className="navbar-nav me-5 pe-5 mb-2 mb-lg-0 mt-3  w-100 justify-content-center align-items-center ">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="cart">Cart</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div className='container-fluid x mb-3 '></div>
    </Fragment>
  );
}
