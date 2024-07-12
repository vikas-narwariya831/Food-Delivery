import React from 'react';

function Content() {
  return (
    <div className="h-[25vh] md:h-[50vh] lg:h-[30rem] mx-auto my-8 bg-[url('/header_img.png')] bg-cover bg-center p-3 relative">
      <div className="absolute flex flex-col items-start gap-3 md:gap-5 bottom-[10%] left-4 md:left-16 lg:left-24 animate-fadeIn">
        <h1 className="text-lg font-medium leading-tight text-white md:text-2xl lg:text-4xl">
          Order your favourite food here
        </h1>
        <div className="flex items-start justify-start">
          <div className="hidden text-xs text-white md:block md:text-base lg:text-lg">
            <p>
              Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
              Satisfy your craving and elevate your dining experience, one delicious meal at a time.
            </p>
          </div>
        </div>
        <button className="px-4 py-2 mt-2 bg-white rounded-lg text-[#747474] text-xs md:text-sm lg:text-base hover:bg-gray-200 transition duration-300">
          View More
        </button>
      </div>
    </div>
  );
}

export default Content;
