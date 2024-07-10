import React, { useState } from 'react';
import { assets } from '../assets/assets';

function FoodItem({ id, name, price, description, image }) {
  console.log(image);
  const [itemCount,setItemCount]=useState(0)
  return (
    <div className='w-full m-auto transition duration-300 rounded-2xl shadow-custom-black animate-fadeIn'>
      <div className='w-full overflow-hidden rounded-t-2xl'>
        <img src={image} alt={name} className='object-cover w-full h-auto' />
        {!itemCount
        ?<img  onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt={assets.add_icon_green} />
        :<div className='flex items-center gap-2 pl-2 mt-3'>
                  <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />

        <p className='font-semibold'>  {itemCount}</p>
        <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />


        </div>
          
        }
      </div>
      <div className='p-4'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-lg font-semibold'>{name}</p>
          <img src={assets.rating_starts} alt="Rating" className='w-20' />
        </div>
        <p className='mb-2 text-gray-600'>{description}</p>
        <p className='text-xl font-bold text-tomato'>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
