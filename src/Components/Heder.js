import React, { createContext, useContext, useState } from 'react'
import Logo from "../Images/Logoicon.jpg"
import MobileToggleBar from '../Pages/MobileToggleBar';

import { faBars, faCartShopping, faPerson, faSearch, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  "../Components/Heder.css";
import { AppContext } from './Home';






function Heder() {
  const [show ,setShow] = useState(false)
  const toggleMobile =()=>{
    setShow(!show)
  }

  const valueProvider = useContext(AppContext);
  // const addToCart= useContext(AppContext)
  return (
    <div>

    <div className='header'>
        
        <div className='mobile__user' onClick={toggleMobile}> <FontAwesomeIcon icon={faBars} /></div>
        <div className='header__left'>
        <img  className='logo__image' src={Logo} /><h3 className='header__title'>supply</h3>
        </div>
        <div className='header__center'>
            <div className='search__input__area'>
                <input  type='text' placeholder=' I m shoping today for...'/>
                <button className='search__button'><FontAwesomeIcon icon={faSearch} /></button>
             </div>

        </div>
        <div className='header__right'>
            <div className='cart__button'><FontAwesomeIcon icon={faCartShopping} />Cart{valueProvider.count}</div>
            <div className='login__button'> <FontAwesomeIcon icon={faUser} />Login/Signup</div>
             
        </div>
        
        
    </div>

    <div className={show ? "" :"mobileShow"}>
      <MobileToggleBar />
    </div>
  
    </div>
  )
}

export default Heder
