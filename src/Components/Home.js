import React, { createContext, useState } from 'react'
import Heder from '../Components/Heder';
import HomeSlider from '../Components/HomeSlider';
import Trending from '../Components/Trending';
import { AppContext } from '../Context';


function Home() {
  const[count ,setCount] = useState(0)
  const addToCart =()=>{
    setCount(count +1)
  }
  const valueProvider ={
    count, 
    setCount ,
    addToCart
  }


  return (
    <div>
      <AppContext.Provider value={valueProvider}>
      <Heder />
      <HomeSlider />
      <Trending />
      </AppContext.Provider>
    </div>
  )
}

export default Home
export{AppContext};


