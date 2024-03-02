import {React,useState} from 'react';
import '../styles/carForm.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { addCar } from '../api/dealer';
import car_logo from '../images/car-img.png';


export default function AddCar() {
    const [formData, setFormData] = useState({
        type: '',
        model: '',
        description: '',
        price:0,
    });


 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 

  const handleClick= async ()=>{

    const {result, Error} = await addCar(formData);
    
    if(Error){
      alert(Error);
      
    }
    setFormData({
      type: '',
      model: '',
      description: '',
      price:0,
    });
  }
    

  return (
    <div className="car">
      <div className="car-form">
        <div className="car-pos">
            <img className='car-logo' src={car_logo} alt='logo'></img>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder='Type of Car'
          />
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder='Model of Car'
          />
          <input 
            type="number" 
            name="price"
            placeholder='Price of car'
            onChange={handleChange}
            min="1">
          </input>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4" cols="50"
            placeholder='Description of a car....'
          />
          <Button onClick={handleClick} className="button" variant="light">ADD <FontAwesomeIcon icon={faCarSide} /></Button>
        </div>
      </div>
    </div>
  );
}
