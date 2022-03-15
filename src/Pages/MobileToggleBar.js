import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import "./MobileToggleBar.css"

function MobileToggleBar() {
  return (
      
    <div className='mobile__toggle__bar'>
       
        <div className='mobile__toggle__single__link'>
        <p className='mobile__toggle__single__link__left'>Mens Cltohing</p>
        <span className='mobile__toggle__single__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='mobile__toggle__single__link'>
        <p className='mobile__toggle__single__link__left'>Womens Cltohing</p>
        <span  className='mobile__toggle__single__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='mobile__toggle__single__link'>
        <p className='mobile__toggle__single__link__left'>Home Stationary</p>
        <span className='mobile__toggle__single__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='mobile__toggle__single__link'>
        <p className='mobile__toggle__single__link__left'>Kitechne </p>
        <span className='mobile__toggle__single__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='mobile__toggle__single__link'>
        <p className='mobile__toggle__single__link__left'>Home Decor</p>
        <span className='mobile__toggle__single__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='mobile__toggle__single__link'>
        <p className='mobile__toggle__single__link__left'>Mens Cltohing</p>
        <span className='mobile__toggle__single__link__right' ><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='mobile__toggle__single__link'>
        <p className='mobile__toggle__single__link__left'>Mens Cltohing</p>
        <span className='mobile__toggle__single__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='mobile__toggle__single__link'>
        <p className='mobile__toggle__single__link__left'>Stationary</p>
        <span className='mobile__toggle__single__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
    </div>
  )
}

export default MobileToggleBar