import React from 'react';
import { assets } from '../assets/assets';

function FoodItem({ id, name, price, description, image }) {
  console.log(image);
  return (
    <div className='w-full m-auto transition duration-300 rounded-2xl shadow-custom-black animate-fadeIn'>
      <div className='w-full overflow-hidden rounded-t-2xl'>
        <img src={image} alt={name} className='object-cover w-full h-auto' />
      </div>
      <div className='p-4'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-lg font-semibold'>{name}</p>
          <img src={assets.rating_starts} alt="Rating" className='w-20' />
        </div>
        <p className='mb-2 text-gray-600'>{description}</p>
        <p className='text-xl font-bold'>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
