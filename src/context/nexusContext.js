import axios from "axios";
import { createContext, useState } from "react";

export let nexusContext = createContext(0);
async  function addToCart(productId){
    return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId},{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then((data)=>{
        return data
    }).catch((err)=>{
        return err
    })
}

async function getCart (){
    return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then((data)=>{
        return data
    }).catch((err)=>{
        return err
    })
}

async function deleteItem (id){
    return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then((data)=>{
        return data
    }).catch((err)=>{
        return err
    })
}

async function updateQty (id,count){
    return  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {count},{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then((data)=>{
        return data
    }).catch((err)=>{
        return err
    })
}


export default function NexusContextProvider({children}){
    const [counter, setCounter] = useState(0)
    return <nexusContext.Provider value={{
        counter,
     setCounter,
      addToCart,
      getCart,
      deleteItem,
      updateQty,
      }}>
        {children}
    </nexusContext.Provider>
}