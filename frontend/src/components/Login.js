import React from 'react'
import '../styles/register.css';
import logo from '../images/logo.jpg'
import { useState } from 'react';
export default function Login() {

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
        <h1 style={{marginBottom:"0px"}}>Login</h1>
        <div className="form">
          
          {/* <label for="email">Email</label> */}
          <input
            style={{marginBottom:"25px", marginTop:"0px"}}
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
          <h3>Not Registered Yet?</h3>
          
          <a href='#'>Signup</a>
        </div>
      </div>
    </div>
  );
}
