import React, { useContext } from 'react';
import { StoreContext } from '../../StoreContext/StoreContext';

function CartDashboard() {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);

  // Define delivery fee and total
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;

  return (
    <div className='mt-24 mb-[200px]'>
      <div className='w-full px-4 mx-auto'>

        <div className='grid grid-cols-6 gap-4 mb-4 text-center'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='w-full h-1 mb-4 bg-gray-300' />

        <div className='space-y-4'>
          {food_list.map((item, index) => {
            const quantity = cartItems[item._id] || 0;
            if (quantity > 0) {
              const totalPrice = item.price * quantity;
              return (
                <div key={item._id}>
                  <div className='grid items-center grid-cols-6 gap-4 text-center'>
                    <img className='w-12 mx-auto' src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{quantity}</p>
                    <p>{totalPrice}</p>
                    <button onClick={() => removeFromCart(item._id)} className='px-2 py-1 text-white bg-red-500 rounded'>
                      Remove
                    </button>
                  </div>
                  <hr className='w-full h-1 mt-4 bg-gray-300' />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className='w-full px-4 mx-auto mt-20'>
        <div className='p-6 bg-white rounded shadow'>
          <h2 className='mb-4 text-2xl font-bold'>Cart Totals</h2>
          
          <div className='flex justify-between mb-5 font-semibold'>
            <p>Subtotal</p>
            <p>{subtotal.toFixed(2)}</p>
          </div>
          <hr/>
          <div className='flex justify-between mb-5 font-semibold'>
            <p>Delivery Fee</p>
            <p>{deliveryFee.toFixed(2)}</p>
          </div>
          <hr/>
          <div className='flex justify-between mb-5 font-semibold'>
            <b>Total</b>
            <b>{total.toFixed(2)}</b>
          </div>
          <button className='w-full p-3 text-white bg-red-500 rounded mt-7'>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartDashboard;