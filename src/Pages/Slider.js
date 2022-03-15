import React, { useState } from 'react'
import { sliderItems } from '../Data'
import SingleSliderItem from './SingleSliderItem';

function Slider() {
    const[index , setIndex] = useState(0)
    const {id , img , desc , title, } = sliderItems[index]
    const checkNumber =(n)=>{
        if(n  > sliderItems.length-1){
            return 0;
            
        
        } if (n  < 0){
            return sliderItems.length -1;
        }
       return n;
    }

    const nextSlider = (index)=>{
        setIndex(index =>{
            let newIndex = index +1;
            return checkNumber(newIndex)
        })
                
    }

    const previousSlider =(index)=>{
        setIndex(index =>{
            let newIndex = index -1;
            return checkNumber(newIndex)
        })

    }
                

  

  return (
    <div>
            <SingleSliderItem 
            id ={id}
            img={img}
            title={title}
            desc={desc}
            previousSlider={previousSlider}
            nextSlider={nextSlider}
            />
 
    </div>
  )
}

export default Slider