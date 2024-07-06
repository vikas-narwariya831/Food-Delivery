import { useState } from "react";
import { assets } from "../assets/assets";

export default function Navbar() {
    const [menu, setMenu] = useState("home");

    return (
        <div className="flex items-center justify-between p-5">
            <img src={assets.logo} alt="" className="w-24 md:w-38" />
            <ul className="hidden gap-6 text-sm text-gray-700 list-none md:flex lg:gap-20 md:text-base">
                <li onClick={() => setMenu("home")} className={`cursor-pointer ${menu === "home" ? "border-b-2 border-blue-500" : ""}`}>
                    Home
                </li>
                <li onClick={() => setMenu("menu")} className={`cursor-pointer ${menu === "menu" ? "border-b-2 border-blue-500" : ""}`}>
                    Menu
                </li>
                <li onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu === "mobile-app" ? "border-b-2 border-blue-500" : ""}`}>
                    Mobile App
                </li>
                <li onClick={() => setMenu("Contact-us")} className={`cursor-pointer ${menu === "Contact-us" ? "border-b-2 border-blue-500" : ""}`}>
                    Contact Us
                </li>
            </ul>
            <div className="flex items-center gap-4 lg:gap-10">
                <img src={assets.search_icon} alt="" className="w-5 h-5 md:w-auto md:h-auto" />
                <div className="relative">
                    <img src={assets.basket_icon} alt="" className="w-5 h-5 md:w-auto md:h-auto" />
                    <div className="absolute bg-[#ff6347] min-w-[10px] min-h-[10px] rounded-md top-[-4px] md:top-[-8px] right-[-4px] md:right-[-8px]"></div>
                </div>
                <button className="px-4 py-2 text-xs text-gray-700 transition duration-300 bg-transparent border-2 border-red-500 rounded-lg cursor-pointer md:text-base hover:bg-pink-50">
                    Sign In
                </button>
            </div>
        </div>
    );
}
