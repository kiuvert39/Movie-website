import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
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
      <HashRouter>
          <div>
            <NavbarMain/>
            <Routes>
                <Route exact path='/' Component={Home}/>                   
                <Route path='/Movies' Component={Movies}/>                      
                <Route path='/latestMovies' Component={LatestMovies}/>            
                <Route path='/AnimatedVideos' Component={AnimatedVideos}/>            
                <Route path='/postUpload' Component={Post}/>            
                <Route path='/animationUpload' Component={Animation}/>            
            </Routes>
          </div>
        <Footer/>
      </HashRouter>
    </div>
  )
}

export default Routs
