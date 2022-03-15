import React from 'react'
import {popularProducts}  from "../Data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import SingleTrending from '../Pages/SingleTrending'
import "../Components.css"

function Trending() {
  return (
    <div className='trending__item__page'>
        <div className='trending__item__icon'>
            <FontAwesomeIcon icon={faFire} className="icon" /> <span>Trending Categories</span>
        </div>
        <div className='trending__item'>
           {popularProducts.map(item=>{
               return(
                   <SingleTrending 
                   id={item.id}
                   key={item.id}
                   img={item.img}
                   title={item.title}
                   
                   />
               )
           })}
        </div>
    </div>
  )
}

export default Trending