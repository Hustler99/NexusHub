/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import { nexusContext } from '../../context/nexusContext';
import { toast } from 'react-toastify';

export default function ProductDetails() {
    let cartCounter = useContext(nexusContext)
    let x = useParams();
    const [Image, setImage] = useState(0)
    const [ImageUrl, setImageUrl] = useState([])
    let [proudct,setProduct]= useState(null);
    let [loading,setLoading] =useState(false);
    async function getProd(){
        setLoading(true);
        let { data}  = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
        setProduct(data.data)
        setLoading(false);
        setImageUrl(data.data.images)
    }
 useEffect(()=>{
    getProd()
 },[])
async function addProduct(productId){
  let data = await cartCounter.addToCart(productId)
  console.log(data.data.status)
  if(data.data.status==='success'){
    toast.dark("Item Added To Cart.",{

    })
    cartCounter.setCounter(data.data.numOfCartItems)
  }
}
 if(loading || !proudct) return <Loading/>
  return (
    <>
   <p className='ms-2' style={{ fontSize: "14px", color: "#555" }}>
      <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}> Home </Link> 
      <i  className="fa-solid fa-angle-left org"></i>
      <Link className='' to="/products" style={{ textDecoration: "none", color: "inherit" }}> Product </Link> 
      <i className="fa-solid fa-angle-left org"></i>
      &#160; <span className='org'>{ proudct.title}</span>
    </p>
    <div className="container mb-3 ">
        <div className="row g-3">
            <div className="col-md-2">
            <img  onMouseOver={e=>(setImage(0))}  className='mb-2' src={proudct.images[0]} width={"150px"} height={"120px"} alt="Product" />
            <img   onMouseOver={e=>(setImage(1))} className='mb-2' src={proudct.images[1]} width={"150px"} height={"120px"} alt="Product" />
            <img onMouseOver={e=>(setImage(2))} src={proudct.images[2]} width={"150px"} height={"120px"} alt="Product" />

            </div>
            <div className="col-md-6 main-panel ">
                <img className='p-3' src={ImageUrl[Image]} width={"100%"} height={"500px"} alt="" />
            </div>
            <div className="col-md-3 offset-md-1   ">
                <div className="main-panel p-3 ">
                <p className='mt-2 mb-2 title-det' >{proudct.title}</p>
                <p>  <i className="fa-solid fa-star" style={{color:"gold"}}></i>  {proudct.ratingsAverage} / 5.0 </p>
                <span className="badge clr1  my-3 ">{proudct?.category.name}</span>
                <span className="badge clr2 my-3 ms-3">{proudct.ratingsAverage > 3?"Best Seller" :"Highly Recommended"}</span>
                <h2 className='my-4' >EGP {proudct.price/10} <span className=' ms-2  clr'>Per day</span> </h2>
                <p className='desc' >{proudct.description}</p>
                <div className='container-fluid x mb-3 my-4 '></div>
                <button  onClick={()=>{addProduct(proudct._id) }} className='btn loc  w-100 mb-3 mt-2' > Add to Cart  <i className="fa-solid fa-cart-plus"></i> </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
