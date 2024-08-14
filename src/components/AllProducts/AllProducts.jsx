import axios from 'axios';
import React from 'react'
import AllProduct from '../AllProduct/AllProduct';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';

export default function AllProducts() {
    function getProducts(){
       return  axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }
   let {data,isLoading} =  useQuery("Prod", getProducts,{
    
   });
    if(isLoading) return <Loading/>
  return (
    <>

    <div className="container ">
        <div className="title father" >
            <h2 className=''>All Products.</h2>
            <h1 className='child'>All Products.</h1>
        </div>
        
        <div className="row ">
            {data?.data.data.map((val)=>{
                return <AllProduct key={val._id} data={val} />
            })}
        </div>
    </div>

    </>
  )
}
