/* eslint-disable eqeqeq */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { nexusContext } from '../../context/nexusContext';
import { toast } from 'react-toastify';

export default function AllProduct(props) {
  const [loading, setloading] = useState(false)
let cartCounter = useContext(nexusContext)
async function addProduct(productId){
  setloading(true)
  let data = await cartCounter.addToCart(productId)
  console.log(data.data.status)
  if(data.data.status=='success'){
    toast.dark("Product Added To Cart.",{

    })
    cartCounter.setCounter(data.data.numOfCartItems)
    setloading(false)
  }
}
  return (
    <>
    <Link style={{textDecoration:"none"}} to={"/product-details/"+props.data._id} className="col-md-4 mb-4 ps-2 bigCard mt-4"> 
      <div className="card shadow">
        <div className="imgCard">
          <img src={props.data.imageCover} width={"250px"} height={"350px"} className="card-img-top p-2" alt="Product" />
          <button disabled={loading} className='btn position-absolute local' onClick={(e)=>{e.preventDefault()
             e.stopPropagation()
             cartCounter.setCounter(cartCounter.counter+1)
             addProduct(props.data._id)
            }}>
              {loading?"Adding" :<i className='fa-brands fa-opencart'></i>}
          </button>
        </div>
        <div className="card-body">
          <div className="card-text">
            <p>{props.data.title.split(" ").slice(0, 2).join(" ")}</p>
          </div>
          <div className='d-flex justify-content-between'>
            <h5 className='me-2'>{props.data.price/10} EGP / Per Day</h5>
            <p><i className="fa-solid fa-star" style={{ color: "gold" }}></i> {props.data.ratingsAverage}</p>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
}
