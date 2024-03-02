import React from 'react'
import '../styles/register.css';
import logo from '../images/logo.jpg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link ,useNavigate } from 'react-router-dom';
import { login } from '../api/user';
import { useContext } from 'react';
import { AuthContext } from '../context/adminProvider';

export default function Login() {

    const default_info = {
        email:'',
        password:'',
    }

  const {setAuth} = useContext(AuthContext);
    

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

        
        const {admin, token , Error} = await login(userInfo);

        if(Error){
            alert(Error);
            setUserInfo(default_info);

        }else{

            if(admin){
              navigate("/dealer");
            }else{
              navigate("/user");
            }
            setAuth({
              LoggedIn:true,
              Admin:admin
            })
            
        }


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
          <Button onClick={handleClick} className="button" variant="light">Login</Button>
          <h3>Not Registered Yet?</h3>
          
          <Link to="/sign-up">Register</Link>
        </div>
      </div>
    </div>
  );
}
