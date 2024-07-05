import React, { useState } from 'react'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'

export default function Home() {

  const [category,setCategory]=useState(`All`)
  return (
    <div><Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}