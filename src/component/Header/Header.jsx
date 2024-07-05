

export default function Header() {
  return (
    <div className="h-[6.25%] md:h-[50vh] lg:h-[30rem] mx-auto my-8 bg-[url('/header_img.png')] bg-cover bg-center p-3  relative">
      <div className='absolute flex flex-col items-start gap-5 bottom-[10%] left-[6rem] animate-fadeIn'>
        <h1 className="text-2xl font-medium text-white text-[50px]  mr-12 text-wrapp ">Order your favourite food here</h1>
        <div className="flex items-start justify-start">
          <div className="flex pr-[41.67%] text-white">
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
            Satisfy your craving and elevate your dining experience, one delicious meal at a time.
          </div>
        </div>
        <button className="px-6 py-2 mt-4 bg-white rounded-lg text-[#747474] ">View More</button>
      </div>
    </div>
  );
}
