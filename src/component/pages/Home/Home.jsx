import React, { useState } from 'react'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import Content from '../../Content/Content'

export default function Home() {

  const [category,setCategory]=useState(`All`)
  return (
    <div>
      <Content/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    {/* <DownloadApp/> */}
    </div>
  )
}
