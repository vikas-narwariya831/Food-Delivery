import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Home from './component/pages/Home/Home';
import FoodItem from './component/FoodItem/FoodItem';
import Content from './component/Content/Content';
import { useState } from 'react';
import LoginPopUp from './component/LoginPopUp/LoginPopUp';
import CartDashboard from './component/pages/CartDashboard/CartDashboard';

export default function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
    // <><div className="mx-auto w-80 md:w-4/5 lg:w-3/4 xl">
    // <Navbar/>
    // <Home/>
    //     </div>
    //     <Footer/>
    //     </>
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>   }
    
    <div className="mx-auto w-80 md:w-4/5 lg:w-3/4 xl">    <Navbar setShowLogin={setShowLogin}/>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartDashboard/>}/>
          
      </Routes>
    </div>
    <Footer/>
    </>

    
  );
}
