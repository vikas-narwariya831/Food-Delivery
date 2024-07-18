import React from 'react'

function PlaceOrder() {
  return (
    <form className='max-w-xl p-4 mx-auto border rounded-lg shadow-lg mt-[100px] mb-[100px]'>
      <div className='mb-6'>
        <p className='mb-4 text-2xl font-bold'>Delivery Information</p>
        <div className='flex mb-4 space-x-4'>
          <input type='text' placeholder='Name' className='w-1/2 p-2 border rounded focus:outline-none focus-within:ring-2 focus:ring-tomato' />
          <input type='tel' placeholder='Mobile' className='w-1/2 p-2 border rounded focus:outline-none focus-within:ring-2 focus:ring-tomato' />
        </div>
        <input type='email' placeholder='Email Address' className='w-full p-2 mb-4 border rounded focus:outline-none focus-within:ring-2 focus:ring-tomato' />
        <input type='text' placeholder='Street' className='w-full p-2 mb-4 border roundedfocus:outline-none focus-within:ring-2 focus:ring-tomato ' />

        <div className='flex mb-4 space-x-4'>
          <input type='text' placeholder='City' className='w-1/2 p-2 border rounded focus:outline-none focus-within:ring-2 focus:ring-tomato' />
          <input type='text' placeholder='State' className='w-1/2 p-2 border rounded focus:outline-none focus-within:ring-2 focus:ring-tomato' />
        </div>
        <div className='flex space-x-4'>
          <input type='text' placeholder='Zip Code' className='w-1/2 p-2 border rounded focus:outline-none focus-within:ring-2 focus:ring-tomato' />
          <input type='text' placeholder='Country' className='w-1/2 p-2 border rounded focus:outline-none focus-within:ring-2 focus:ring-tomato' />
        </div>
      </div>
      <button className='w-full p-4 text-2xl text-white duration-300 bg-red-500 rounded-sm hover:bg-tomato'>Place Order</button>

    </form>
  )
}

export default PlaceOrder
