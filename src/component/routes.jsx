import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './footer'
import NavbarMain from './Navbar'
import LatestMovies from './LatestMovies.jsx'
import Movies from './Movies.jsx'
import AnimatedVideos from "./AnimatedVideos"
import Post from './Post'
import Animation from './Animation'
import NoPage from './NoPage'

const Routs = () => {
  return (
    <div>
      <Router>
      <NavbarMain/>
        <Routes>
            <Route path='/' element={<Home/>}/>                   
            <Route path='/Movies' element={<Movies/>}/>                      
            <Route path='/latestMovies' element={<LatestMovies/>}/>            
            <Route path='/AnimatedVideos' element={<AnimatedVideos/>}/>            
            <Route path='/Post' element={<Post/>}/>            
            <Route path='/Animation' element={<Animation/>}/>            
            <Route path='*' element={<NoPage/>}/>            
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default Routs
