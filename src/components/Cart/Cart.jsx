/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { nexusContext } from '../../context/nexusContext'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

export default function Cart() {
  const [data, setData] = useState(null);
  const  [loading, setLoading] = useState(false)
  const { getCart, deleteItem,setCounter, updateQty } = useContext(nexusContext);

  useEffect(() => {

    async function getLoggedCart() {
      setLoading(true)
      const data = await getCart();
        setData(data.data); 
        setLoading(false)
      
    }
    
    getLoggedCart();
  }, []);

  async function deleteProduct(id){
    let data = await deleteItem(id)
    if(data.data.status=="success"){
      setData(data.data)
      setCounter(data.data.numOfCartItems)
      toast.success("Item deleted successfully");
    }
  }
  async function updatePrdQty(id,count){
    let data = await updateQty(id,count)
    if(data.data.status=="success"){
      setData(data.data)
      setCounter(data.data.numOfCartItems)
      toast.success("Item days Updated Successfully")
    }
  }
  if (!data || loading) {
    return <Loading/>
  }
  if(data==null || data.numOfCartItems==0 || data==undefined) return <h2 className='vh-100 text-main d-flex justify-content-center align-items-center fs-1'>Cart is empty!</h2>


  return (
    <>
<p className='ms-2' style={{ fontSize: "14px", color: "#555" }}>
  <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}> Home </Link>
  <i className="fa-solid fa-angle-left org"></i>
  <Link className='' to="/cart" style={{ textDecoration: "none", color: "inherit" }}> Cart </Link>
</p>
      <h4 className='lead text-center fw-bold'>Sub Total:  EGP {data.data.totalCartPrice / 10}</h4>
      <h6 className='lead text-center fw-bold'>
  The total payment including the 10% commission is: EGP {(data.data.totalCartPrice * 1.1/10).toFixed(2)} 
  (Commission: EGP {(data.data.totalCartPrice * 0.1/10).toFixed(2)}).
</h6>

{data.data.products.map((product) => (
  <div key={product._id} className="container mb-3 main-panel d-flex flex-wrap justify-content-between align-items-center">
    <div className="left-panel d-flex flex-wrap align-items-center">
      <div className="left-img">
        <div className="main-panel my-3 me-3">
          <img className='p-3' src={product.product.imageCover} alt="Product" width={"120px"} height={"120px"} />
        </div>
      </div>
      <div className="right-content mt-3">
        <h5>{product.product.title.split(" ").slice(0, 2).join(" ")}</h5>
        <span className="badge clr1 mb-2">{product.product.category.name}</span>
        <p> EGP {product.price/10}</p>
      </div>
    </div>
    <div className="right-panel ms-5 d-flex flex-column align-items-center">
      <button    onClick={()=>{
        deleteProduct(product.product.id)
      }} className='btn text-center w-100'>
        <i className="fa-solid fa-trash mt-4 fa-2xl" style={{ color: "#ef4444" }}></i>
      </button>
      <div className='btnLoc d-flex align-items-center justify-content-between mt-5'>
        <button disabled={product.count<=1}  onClick={()=>{
          updatePrdQty(product.product.id, product.count -1)
        }}  className='btnControl'>-</button>
        <span className='countDisplay'>{product.count}</span>
        <button onClick={()=>{
         updatePrdQty(product.product.id, product.count +1)

        }} className='btnControl'>+</button>
        
      </div>
      <p className='lead fs-6 pt-3'>Number of Day(s).</p>
    </div>
  </div>
      ))}

    </>
  );
}

