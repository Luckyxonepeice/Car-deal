import React, { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import { getSoldCar } from '../api/dealer'
import {ArrowBigRight} from "lucide-react"
export default function SoldCar() {

  const[cars, setCars]=useState([]);

  const soldCars= async()=>{

    const {result,Error}=await getSoldCar();
    
    if(Error){
      alert(Error);
    }else{
      setCars(result);
    }
  } 

  let price=0;
  cars.forEach(element => {
    let val = Number(element.price);
    price=price+val;
  });

  useEffect( ()=>{
    soldCars();
  },[])
  return (
    <div className='slide-pos'>
      <div className="slide-container">
        <div className='slider-img'>
          <h1 style={{textAlign:"center",fontWeight:"normal" , textShadow:"2px 1px black", color:"grey"}}>Sold Cars!</h1>
          <ImageSlider image={cars} />
        </div>
        <h1 style={{textAlign:"center",fontWeight:"normal" , textShadow:"2px 1px black", color:"grey"}}>TOTAL SALES{" "}<ArrowBigRight/>{price}</h1>
    </div>

    </div>
    
  )
}
