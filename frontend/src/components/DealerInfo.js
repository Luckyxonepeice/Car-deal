import {React,useState,useEffect} from 'react'
import '../styles/dealerinfo.css';
import car from '../images/car.jpg';
import Card from './Card';
import { getallCar } from '../api/dealer';
import { useContext } from 'react';
import { AuthContext } from '../context/adminProvider';
import profile_img from "../images/profile.png";


export default function DealerInfo() {

    const [cars, setCars] =useState([]);

    const getCars = async()=>{
        const {Error,result} = await getallCar();

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
    <div>
        <div className='profile'>
            <img src={profile_img} alt="logo"></img>
        </div>
        <h1 style={{textAlign:"center", color:"gray", textShadow:"2px 1px black"}}>Buy Yourself a Car</h1>
      <div className='car-back'>
            <img src={car} alt="logo"></img>
      </div>
      <div className='car-deal'>
        {
            cars.map( (val)=>{
                return <Card val={val}/>
            })
        }
      </div>
      
    </div>
  )
}
