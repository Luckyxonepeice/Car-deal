import React from 'react'
import '../styles/register.css';
import logo from '../images/logo.jpg'
import { useState } from 'react';
export default function Register() {

    const [userInfo, setUserInfo] = useState({
        name:'',
        email:'',
        password:'',
        location:'',
        admin:false
    })

    const handleChange=( (e)=>{

        const {name , value , type, checked} = e.target;


        setUserInfo({
            ...userInfo,
            [name]:type==='checkbox'?checked:value
        })
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
          ></input>
          {/* <label for="password">Password</label> */}
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={userInfo.password}
            name="password"
          ></input>
          {/* <label for="location">Location</label> */}
          <input
            className="input"
            type="text"
            placeholder="Location"
            name="location"
            value={userInfo.location}
          ></input>
          <label for="checkbox">Dealer</label>
          <input
            className="checkbox"
            type="checkbox"
            value={userInfo.admin}
            name="admin"
            onChange={handleChange}
          ></input>

          <h3>Already have a account?</h3>
          <a href='#'>Log in</a>
        </div>
      </div>
    </div>
  );
}
