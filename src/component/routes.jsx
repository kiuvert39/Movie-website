import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './footer'
import NavbarMain from './Navbar'
import LatestMovies from './LatestMovies.jsx'
import Movies from './Movies.jsx'
 
const Routs = () => {
  return (
    <div>
      <Router>
      <NavbarMain/>
        <Routes>
            <Route path='/' element={<Home/>}/>                   
            <Route path='/Movies' element={<Movies/>}/>                      
            <Route path='/latestMovies' element={<LatestMovies/>}/>            
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default Routs
