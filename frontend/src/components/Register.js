import React from 'react'
import '../styles/register.css';
import logo from '../images/logo.jpg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api/user';

export default function Register() {
    const default_info = {
        name:'',
        email:'',
        password:'',
        location:'',
        admin:false
    }

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(default_info)

    const handleChange=( (e)=>{

        const {name , value , type, checked} = e.target;


        setUserInfo({
            ...userInfo,
            [name]:type==='checkbox'?checked:value
        })
    })

    const handleClick = ( async (e)=>{

        
        const {Error} = await register(userInfo);

        if(Error){
            alert(Error)
        }else{
            setUserInfo(default_info);
            navigate("/");

        }


    })
  return (
    <div className="register-body">
      <div className="register">
        <img src={logo} alt="Logo"></img>
        <h1>Signup</h1>
        <div className="form">
          {/* <label for="name">Name</label> */}
          <input
            className="input"
            type="text"
            placeholder="Full Name"
            value={userInfo.name}
            name="name"
            onChange={handleChange}
          ></input>
          {/* <label for="email">Email</label> */}
          <input
            className="input"
            type="email"
            value={userInfo.email}
            placeholder="Email Id"
            name="email"
            onChange={handleChange}
          ></input>
          {/* <label for="password">Password</label> */}
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={userInfo.password}
            name="password"
            onChange={handleChange}
          ></input>
          {/* <label for="location">Location</label> */}
          <input
            className="input"
            type="text"
            placeholder="Location"
            name="location"
            value={userInfo.location}
            onChange={handleChange}
          ></input>
          <label htmlFor="checkbox">Dealer</label>
          <input
            className="checkbox"
            type="checkbox"
            value={userInfo.admin}
            name="admin"
            onChange={handleChange}
          ></input>
        <Button onClick={handleClick} className="button" variant="light">Register</Button>
          <h3>Already have a account?</h3>
          <Link to="/">Sign-in</Link>
        </div>
      </div>
    </div>
  );
}
