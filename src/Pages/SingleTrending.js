import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { AppContext } from '../Components/Home'
import { popularProducts } from '../Data'
import "../Pages/SingleTrending.css"






function SingleTrending({id ,img,title ,count,addToCart}){
  
 


  return (
    <div className='singleTrndingItem'>
        <img  className='trending__image' src={img}/>
        <p className='trending__text'>{title}</p>
        <button onClick={addToCart}><FontAwesomeIcon icon={faCartShopping}/></button>
        
    </div>
  )
}

export default SingleTrending
