import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './footer'
import NavbarMain from './Navbar'
import Movies from './Movies'
import MoviesPost from './MoviesPost'
import NoPage from './NoPage'
import Series from './Series'
import SeriesPost from './SeriesPost'
import AboutUs from './About-Us'

const Routs = () => {
  return (
    <div>
          <NavbarMain/>
      <HashRouter>
          <div>
            <Routes>
                <Route path='/' Component={Movies}/>                                
                <Route path='/Series' Component={Series}/>            
                <Route exact path='/AboutUs' Component={AboutUs}/>                   
                <Route path='/moviesUpload' Component={MoviesPost}/>            
                <Route path='/seriesUpload' Component={SeriesPost}/>                      
                <Route path='/home' Component={Home}/>                      
                <Route path='*' Component={NoPage}/>            
            </Routes>
          </div>
      </HashRouter>
        <Footer/>
    </div>
  )
}

export default Routs
