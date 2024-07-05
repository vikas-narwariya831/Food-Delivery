import React from 'react';
import { menu_list } from '../assets/assets';
import './custom-scrollbar.css'; // Import the custom scrollbar CSS

export default function ExploreMenu({ setCategory, category }) {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-medium">
        Explore our menu
      </h1>
      <p className="mb-5 font-medium text-[#808080] max-w-[60%]">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="flex gap-[30px] text-center my-[20px] overflow-x-scroll scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
            className="cursor-pointer"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-[200px] ${category === item.menu_name ? 'border-2 rounded-full border-tomato p-0.5' : ''}`}
            />
            <p className="text-[#747474] text-[21px]">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="my-2 bg-[#e2e2e2] border-0 h-[2px]" />
    </div>
  );
}
