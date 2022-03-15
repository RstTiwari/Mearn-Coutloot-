import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import "../Pages/DesktopSideNavbar.css"
import bootstrap from 'bootstrap' 

export default function DesktopSideNavbar() {
  return (
    <div className=' hidden-md  desktop__sideNavbar__bar'>
       
        <div className='desktop__sideNavbar__link'>
        <p className='desktop__sideNavbar__link__left'>Mens Cltohing</p>
        <span className='desktop__sideNavbar__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='desktop__sideNavbar__link'>
        <p className='desktop__sideNavbar__link__left'>Womens Cltohing</p>
        <span  className='desktop__sideNavbar__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='desktop__sideNavbar__link'>
        <p className='desktop__sideNavbar__link__left'>Home Stationary</p>
        <span className='desktop__sideNavbar__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='desktop__sideNavbar__link'>
        <p className='desktop__sideNavbar__link__left'>Kitechne </p>
        <span className='desktop__sideNavbar__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='desktop__sideNavbar__link'>
        <p className='desktop__sideNavbar__link__left'>Home Decor</p>
        <span className='desktop__sideNavbar__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='desktop__sideNavbar__link'>
        <p className='desktop__sideNavbar__link__left'>Mens Cltohing</p>
        <span className='desktop__sideNavbar__link__right' ><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='desktop__sideNavbar__link'>
        <p className='desktop__sideNavbar__link__left'>Mens Cltohing</p>
        <span className='desktop__sideNavbar__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
        <div className='desktop__sideNavbar__link'>
        <p className='desktop__sideNavbar__link__left'>Stationary</p>
        <span className='desktop__sideNavbar__link__right'><FontAwesomeIcon  icon={faGreaterThan}/></span>
        </div>
    </div>
  )
}
