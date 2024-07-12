import  { useContext } from 'react';
import { assets } from '../assets/assets'; // Assuming correct path to assets
import { StoreContext } from '../StoreContext/StoreContext';

function FoodItem({ id, name, price, description, image }) {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);

  return (
    <div className='w-full m-auto rounded-2xl shadow-custom-black'>
      <div className='relative overflow-hidden rounded-t-2xl'>
        <img src={image} alt={name} className='object-cover w-full h-auto' />
        <div className='absolute inset-0 flex items-end justify-end mt-2'>
          {!cartItems[id] ? (
            <img
              className='bg-white rounded-full cursor-pointer w-[35px] bottom-[15px] right-[15px]'
              onClick={() => addToCart(id)}
              src={assets.add_icon_white} // Assuming this is imported correctly
              alt="Add Icon"
            />
          ) : (
            <div className='rounded-[50px] p-[6px] right-[15px] bottom-[15px] flex items-center gap-2 pl-2 mt-3 bg-white'>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green} // Assuming this is imported correctly
                alt="Add"
              />
              <p className='font-semibold'>{cartItems[id]}</p>
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red} // Assuming this is imported correctly
                alt="Remove"
              />
            </div>
          )}
        </div>
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
