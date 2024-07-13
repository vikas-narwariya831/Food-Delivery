import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Navbar({ setShowLogin }) {
    const [menu, setMenu] = useState("home");

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    };

    return (
        <div className="flex items-center justify-between p-5">
            <img src={assets.logo} alt="Logo" className="w-32 md:w-48" />
            <ul className="hidden gap-6 text-sm text-gray-700 list-none md:flex lg:gap-20 md:text-base">
                <Link to='/' onClick={() => handleMenuClick("home")} className={`cursor-pointer ${menu === "home" ? "border-b-2 border-blue-500" : ""}`}>
                    Home
                </Link>
                <a href="#explore-menu" onClick={() => handleMenuClick("menu")} className={`cursor-pointer ${menu === "menu" ? "border-b-2 border-blue-500" : ""}`}>
                    Menu
                </a>

                <a href="#mobile-App" onClick={() => handleMenuClick("mobile-app")} className={`cursor-pointer ${menu === "mobile-app" ? "border-b-2 border-blue-500" : ""}`}>
                    Mobile App
                </a>

                <a href="#" onClick={() => handleMenuClick("contact-us")} className={`cursor-pointer ${menu === "contact-us" ? "border-b-2 border-blue-500" : ""}`}>
                    Contact Us
                </a>
            </ul>
            <div className="flex items-center gap-4 lg:gap-10">
                <img src={assets.search_icon} alt="Search" className="w-5 h-5 md:w-auto md:h-auto" />
                <div className="relative">
                  <Link to='/cart'>   <img src={assets.basket_icon} alt="Basket" className="w-5 h-5 md:w-auto md:h-auto" /> </Link>
                    <div className="absolute bg-[#ff6347] min-w-[10px] min-h-[10px] rounded-md top-[-4px] md:top-[-8px] right-[-4px] md:right-[-8px]"></div>
                </div>
                <button onClick={() => setShowLogin(true)} className="px-4 py-2 text-xs text-gray-700 transition duration-300 bg-transparent border-2 border-red-500 rounded-lg cursor-pointer md:text-base hover:bg-pink-50">
                    Sign In
                </button>
            </div>
        </div>
    );
}
