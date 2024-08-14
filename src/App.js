/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import MainLayout from './components/Layouts/UserLayout/MainLayout';
import Home from './components/Home/Home';
import Contact from './components/ContactUs/Contact';
import Cart from './components/Cart/Cart';
import AuthLayout from './components/Layouts/AuthLayout/AuthLayout';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import NotFound from './components/NotFound/NotFound';
import AllProducts from './components/AllProducts/AllProducts';
import { Offline, Online } from "react-detect-offline";
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import ProductDetails from './components/ProductDetails/ProductDetails';
import NexusContextProvider from './context/nexusContext';
import { ToastContainer, toast } from 'react-toastify';


export default function App() {
  let routes = createHashRouter([
    {path:"/", element:<MainLayout/>, children:[
      {index:true, element:<ProtectedRoutes> <Home/>  </ProtectedRoutes>},
      {path:"home", element:<ProtectedRoutes> <Home/> </ProtectedRoutes>},
      {path:"contact", element: <ProtectedRoutes> <Contact/> </ProtectedRoutes>},
      {path:"cart", element: <ProtectedRoutes> <Cart/> </ProtectedRoutes>},
      {path:"products", element: <ProtectedRoutes> <AllProducts/> </ProtectedRoutes>},
      {path:"product-details/:id", element: <ProtectedRoutes> <ProductDetails/> </ProtectedRoutes>},
      {path:"*", element: <NotFound/>}


    ]},
    {path:"/", element:<AuthLayout/>, children:[
      {path:"signup", element: <Signup/>},
      {path:"signin", element:<Signin/>}
  ]}
  ])
  return (
    <Fragment>
        <div>
          <NexusContextProvider>
          <Online>

    <RouterProvider router={routes} />

    </Online>
          </NexusContextProvider>
<ToastContainer theme='dark' autoClose={600} />
    <Offline>
      <div className='offline text-center'>
        You're offline please check your internet connection!
      </div>
    </Offline>
  </div>
    </Fragment>
  )
}

