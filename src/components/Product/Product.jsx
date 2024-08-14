import axios from 'axios';
import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { nexusContext } from '../../context/nexusContext';
import { toast } from 'react-toastify';

export default function Product(props) {  
  let cartCounter = useContext(nexusContext)
  function getProducts(){
    return  axios.get('https://ecommerce.routemisr.com/api/v1/products')
 }
async function addProduct(productId){
  let data = await cartCounter.addToCart(productId)
  if(data.data.status==='success'){
    toast.dark("Product Added To Cart.",{

    })
    cartCounter.setCounter(data.data.numOfCartItems)
  }
}
let {data,isLoading} =  useQuery("Prod", getProducts);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  if(isLoading) return <Loading/>
  return (
    <>
      <Carousel
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1200}
      itemClass="carousel-item-padding-40-px"
      className='mt-5 container mb-5  ' responsive={responsive}>
        {data?.data.data.map((val)=>{
         return <Link  to={"/product-details/"+val._id} key={val._id} className="card shadow mb-2 " style={{ width: "15rem", textDecoration:"none" }}>
         <div className="imgCard position-relative">
           <img src={val.imageCover} width={"150px"} height={"210px"} className="card-img-top p-2" alt="..." />
           <button   className='btn position-absolute local' onClick={(e)=>{e.preventDefault()
             e.stopPropagation()
             addProduct(val._id)
             }}>
             <i className='fa-brands fa-opencart'></i>
           </button>
         </div>
         <div className="card-body">
           <div className="card-text">
             <p>{val.title.split(" ").slice(0, 2).join(" ")}</p>
           </div>
           <div className='d-flex justify-content-between'>
             <h5 className='me-2'>{val.price} EGP </h5>
             <p>  <i className="fa-solid fa-star" style={{color:"gold"}}></i>  {val.ratingsAverage} </p>
           </div>
         </div>
       </Link>
        })}
  </Carousel>

    
    </>
  );
}
