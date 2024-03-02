import {React,useState} from 'react';
import {FileUploader} from "react-drag-drop-files";
import '../styles/carForm.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { addCar } from '../api/dealer';

export default function AddCar() {
    const [formData, setFormData] = useState({
        type: '',
        model: '',
        description: '',
        image:null
    });
    const fileTypes = ["JPG", "PNG"];


  const [file, setFile] = useState(null);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleImage = (file) => {
    setFile(file);
  };

  const handleClick= async ()=>{
    const response = await addCar();
    console.log(response);
  }
    
  return (
    <div className="car">
      <div className="car-form">
        <div className="car-pos">
            <label htmlFor='image-upload'>Drop Image</label>
          <FileUploader
            id="image-upload"
            handleChange={handleImage}
            name="file"
            types={fileTypes}
          />
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
