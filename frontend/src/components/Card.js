import React from 'react'
import '../styles/card.css';
import thar from '../images/thar.jpg'
import { addSoldCar } from '../api/dealer';

function Cards({val}) {

    async function  handleClick(){
        const {Error}= await addSoldCar({cars_id:[val._id] , email:val.email})
        
        if(Error){
            alert(Error);
        }else{
            alert("Car buyed Successfully!");
        }

    }
  return (
    <div>
        <div className='car-card'>
            <img className='card-img' src={thar} alt="car"></img>
            <h1 style={{color:"gold", textAlign:"center", fontSize:"20px"}}>{val.type}{" "}{val.model}</h1>
            <h1 style={{color:"gold", textAlign:"center", fontSize:"20px", marginTop:"20px"}}>Price:{" ₹"}{val.price}</h1>
            <h1 style={{color:"gold", textAlign:"center", fontSize:"10px", marginTop:"50px"}}>{val.description}</h1>
            <button onClick={handleClick}style={{marginLeft:"42%", width:'60px',borderRadius:"5px"}}>Buy</button>
        </div>
    </div>
  );
}

export default Cards;
