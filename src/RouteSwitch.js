import React, { Component } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './Home/Home'
import CreateAccount from './CreateAccount/CreateAccount'
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'


export default class RouteSwitch extends Component {
  render() {
    return (
      
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/createaccount" element={<CreateAccount />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/dashboard" element={<Dashboard />}/>
      
       
    </Routes>
</BrowserRouter>
    )
  }
}
