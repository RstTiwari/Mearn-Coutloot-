import React from 'react'
import DesktopSideNavbar from '../Pages/DesktopSideNavbar'
import MobileToggleBar from '../Pages/MobileToggleBar'
import Slider from '../Pages/Slider'
import "./HomeSlider.css"

function HomeSlider() {
  return (
    <div className='homeSlideBar'>
        <div className='homeSlideBar__left'>
        <DesktopSideNavbar />
        </div>
        <div  className='homeSlideBar__right'>
          <div   className='homeSlideBar__right__top'><Slider /></div>
        </div>

        
    </div>
  )
}

export default HomeSlider