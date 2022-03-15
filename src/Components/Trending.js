import React, { createContext, useContext,useState } from 'react'
import {popularProducts}  from "../Data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import "../Components/Trending.css"
import "../Pages/SingleTrending"
import "../Components/Trending.js"
import SingleTrending from '../Pages/SingleTrending'
import { AppContext } from './Home'




function Trending() {
  const valueProvider = useContext(AppContext)

  return (
    <div className='trending__item__page'>
     
        <div className='trending__item__icon'>
            <FontAwesomeIcon icon={faFire} className="icon" /> <span >Trending Categories</span>
        </div>
        <div className='trending__item'>
           {popularProducts.map(item=>{
               return(
                   <SingleTrending 
                   id={item.id}
                   key={item.id}
                   img={item.img}
                   title={item.title}
                   count={valueProvider.count}
                   addToCart={valueProvider.addToCart}
           
               
                
                   
                   />
               )
           })}
        </div>
       
    </div>
  )
}

export default Trending
