import React from 'react'

function Content() {
  return (
    <div className="h-[25vh] md:h-[50vh] lg:h-[30rem] mx-auto my-8 bg-[url('/header_img.png')] bg-cover bg-center p-3 relative">
      <div className='absolute flex flex-col items-start gap-5 bottom-[10%] left-[2rem] md:left-[4rem] lg:left-[6rem] animate-fadeIn'>
        <h1 className="text-xl font-medium leading-tight text-white md:text-2xl lg:text-4xl">
          Order your favourite food here
        </h1>
        <div className="flex items-start justify-start">
          <div className="text-white">
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
            Satisfy your craving and elevate your dining experience, one delicious meal at a time.
          </div>
        </div>
        <button className="px-6 py-2 mt-4 bg-white rounded-lg text-[#747474]">View More</button>
      </div>
    </div>
    
  )
}

export default Content