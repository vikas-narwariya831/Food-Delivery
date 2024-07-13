import React, { useContext } from 'react'
import { StoreContext } from '../../StoreContext/StoreContext'

function Cart() {
    const {cartItems,food_list,removeFromCart}=useContext(StoreContext)
  return (
    <div className='cart'>
        <div className='cart items'>

            <div className='cart item titles'>
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
                
            </div>
            <br/>
            <hr/>
            {food_list.map}
        </div>
    </div>
  )
}

export default Cart