import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const[cartItems,setCardItems]=useState({});

    const addToCart=(itemId)=>{

    
    if(!cartItems[itemId])
    {
        setCardItems((prev)=>({...prev,[itemId]:1}))
    }
    else
    {
        setCardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
   

    }
    const removeFromCart=(itemId)=>{
        setCardItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const ContextValue={
        food_list,
        cartItems,
        setCardItems,
        addToCart,
        removeFromCart
  
    }

    useEffect(()=>{
     console.log(cartItems)
    },[cartItems])

    return(
        <StoreContext.Provider value={ContextValue}>
    {props.children}

        </StoreContext.Provider>
    )
}

export default StoreContextProvider;