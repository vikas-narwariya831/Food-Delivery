import React, { useContext } from 'react'
import { StoreContext } from '../StoreContext/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './Cutom-css.css'

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)
  return (
    <div className='mt-[30px]'>
        <h2 className='text-[28.8px] font-semibold'>Top Dishes Near You</h2>
        <div className='grid-auto-fill'>
        {food_list.map((item,index)=>{
   return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        })}
        </div>
    </div>
  )
}
 
export default FoodDisplay