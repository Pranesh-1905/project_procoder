import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import RegisterScreen from './RegisterScreen'
import LoginScreen from './LoginScreen'
import DashboardScreen from './DashboardScreen'
import WelcomePage from './Welcome'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen/>}></Route>
            <Route path="/Reg" element={<RegisterScreen/>}></Route>
            <Route path="/Home" element={<DashboardScreen/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}


export default Router
