import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../components/About'
import AddCar from '../components/AddCar'
import Login from '../components/Login'
import Register from '../components/Register'
import SoldCar from '../components/SoldCar'
import NotFound from '../components/Notfound'

export default function AdminNavigator() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/sign-up" element={<Register/>}></Route>
            <Route path='/dealer' element={<About/>}></Route>
            <Route path='/dealer/add' element={<AddCar></AddCar>}></Route>
            <Route path='/dealer/sold' element={<SoldCar/>}></Route>
            <Route path="*" element={<NotFound />} />

        </Routes>
      
    </div>
  )
}
