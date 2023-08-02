import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Request from './Request'
import Footer from './footer'
import NavbarMain from './Narvbar'
import Seriese from './Seriese.jsx'
import Movies from './Movies.jsx'
 
const Routs = () => {
  return (
    <div>
      <Router>
      <NavbarMain/>
        <Routes>
            <Route path='/' element={<Home/>}/>                   
            <Route path='/Movies' element={<Movies/>}/>            
            <Route path='/Request' element={<Request/>}/>            
            <Route path='/Seriese' element={<Seriese/>}/>            
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default Routs
