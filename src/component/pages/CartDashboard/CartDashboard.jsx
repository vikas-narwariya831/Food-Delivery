import React, { useContext } from 'react';
import { StoreContext } from '../../StoreContext/StoreContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function CartDashboard() {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const swalAlert=()=>{
    Swal.fire({
      title: "",
      text: "No Product Found",
      icon: "DELETE"
    });
  }
   
  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);
  const removeProductAlert=(id)=>{
    removeFromCart(id)
    Swal.fire({
      title: "",
      text: "Product Remove ",
      icon: "success"
    });
   }

  // Define delivery fee and total
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;
  const navigate = useNavigate();
  
  const handleClickToProceed = () => {
    navigate('/placeorder');
  };

  // Calculate total items in the cart
  const totalItems = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);

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
          {food_list.map((item) => {
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
                    <button onClick={() =>removeProductAlert(item._id)} className='px-2 py-1 text-white bg-red-500 rounded'>
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
          <hr />
          <div className='flex justify-between mb-5 font-semibold'>
            <p>Delivery Fee</p>
            <p>{deliveryFee.toFixed(2)}</p>
          </div>
          <hr />
          <div className='flex justify-between mb-5 font-semibold'>
            <b>Total</b>
            <b>{total.toFixed(2)}</b>
          </div>
          <button 
            onClick={totalItems > 0 ? handleClickToProceed : () => swalAlert('Quantity must be greater than 0')} 
            className='w-full p-3 text-white bg-red-500 rounded mt-7'
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDashboard;
