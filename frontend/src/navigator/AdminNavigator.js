import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../components/About'
import AddCar from '../components/AddCar'
import Login from '../components/Login'
import Register from '../components/Register'

export default function AdminNavigator() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/sign-up" element={<Register/>}></Route>
            <Route path='/dealer' element={<About/>}></Route>
            <Route path='/dealer/add' element={<AddCar></AddCar>}></Route>
        </Routes>
      
    </div>
  )
}
