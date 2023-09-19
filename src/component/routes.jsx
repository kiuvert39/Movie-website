import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './footer'
import NavbarMain from './Navbar'
import LatestMovies from './LatestMovies.jsx'
import Movies from './Movies.jsx'
import Post from './Post'
import NoPage from './NoPage'
import SeriesVideos from './SeriesVideos'
import Series from './Series'

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
                <Route path='/AnimatedVideos' Component={SeriesVideos}/>            
                <Route path='/postUpload' Component={Post}/>            
                <Route path='/seriesUpload' Component={Series}/>                      
                <Route path='*' Component={NoPage}/>            
            </Routes>
          </div>
        <Footer/>
      </HashRouter>
    </div>
  )
}

export default Routs
