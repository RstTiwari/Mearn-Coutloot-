import React from 'react'
import "../Pages/SingleSliderItem.css"

function SingleSliderItem({id , img , desc , bg, title, previousSlider,nextSlider}) {
  return (
    <div className='singleSliderItem'>
        <div className='slider__image__section'>
        <img className='sliderImage'  src={img} alt={desc} />
        </div>
       <div className='image__description__section'>
           <p className='sliderTitle'>{title}</p>
           <p className='sliderDescription'>{desc}</p>
        </div>

        <div className='forward__backword__button'>
            <button className='forward__backword__button__left' onClick={previousSlider}>&lt;</button>
            <button className='forward__backword__button__right' onClick={nextSlider}>&gt;</button>
            
        </div>
       
        
         
    </div>
  )
}

export default SingleSliderItem