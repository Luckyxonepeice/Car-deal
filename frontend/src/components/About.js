import React, { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { getCar } from '../api/dealer';
import '../styles/slider.css';
import ImageSlider from './ImageSlider';


  
  
  export default function About() {


    const [cars, setCars] =useState([]);
    const getCars = async()=>{
        const {Error,result} = await getCar();

        if(Error){
            alert(Error);
        }else{
            setCars(result);
        }

    }

    useEffect( ()=>{
        getCars();
    },[])

    
  return (
    <div className='slide-pos'>
      <div className="slide-container">
        <div className='slider-img'>
          <h1 style={{textAlign:"center",fontWeight:"normal" , textShadow:"2px 1px black", color:"grey"}}>Available Cars</h1>
          <ImageSlider image={cars}/>
        </div>
        <h1 style={{textAlign:"center",fontWeight:"normal" , textShadow:"2px 1px black", color:"grey"}}>ABOUT DEALER</h1>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
        </p>

    </div>

    </div>
    
  );
}
