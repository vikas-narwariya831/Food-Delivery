import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Home from './component/pages/Home/Home'

export default function App() {
  return (
    <><div className="mx-auto w-80 md:w-4/5 lg:w-3/4 xl">
<Navbar/>
<Home/>
    </div>
    <Footer/>
    </>
  )
}
