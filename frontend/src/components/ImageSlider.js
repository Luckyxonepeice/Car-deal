import React, { useState } from 'react'
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"
import '../styles/imageslider.css';

export default function ImageSlider({image}) {

    console.log(image);
    const [imageIndex, setImageIndex] = useState(0);

    if(image.length===0){
        return<div></div>
    }
    function showNext(){
        setImageIndex(index=>{
            if(index===image.length-1) return 0;
            return index+1;
        })
    }

    function showPrev(){
        setImageIndex(index=>{
            if(index===0) return image.length-1;
            return index-1;
        })

    }
    
  return (
    <div className='slider-box'>
      <div className='box'>
        <h1 style={{color:"gold" , textAlign:"center", paddingTop:"50px"}}>{image[imageIndex].type}</h1>
        <h1 style={{color:"gold" , textAlign:"center"}}>Model{" "}{<ArrowBigRight></ArrowBigRight>}{" "}{image[imageIndex].model}</h1>
        <h1 style={{color:"gold" , textAlign:"center"}}>Price{" "}{<ArrowBigRight></ArrowBigRight>}{" "}{"₹"}{image[imageIndex].price}</h1>
        <p style={{color:"gold" , textAlign:"center"}}>{image[imageIndex].description}</p>
      </div>
      <button onClick={showNext} className='slider-btn' style={{left:0}}><ArrowBigLeft></ArrowBigLeft></button>
      <button onClick={showPrev} className='slider-btn' style={{right:0}}><ArrowBigRight></ArrowBigRight></button>
    </div>
  )
}
