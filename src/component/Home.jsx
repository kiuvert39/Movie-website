import React, { useState } from 'react'
import "../component/player.css"
import data from "../JSON/Recommendation.json"
import Button from 'react-bootstrap/Button';
import LatestMovies from './LatestMovies.jsx';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="d-flex moveleft justify-content-center mobile ">     
      <LatestMovies/>
      <Recommendations/>
    </div>
  )
}





export function MovieCard(){
   return(
    <>
          <div className='m-1  p-0 flex-wrap d-flex gap-2 v-card'>
            {data.map( (value) =>{
                return(
                  <div key={value.id}>
                    <img src={value.url} alt="" className='card-width'/>
                      <Link to="/Movies" style={{ textDecoration:"none" }}><h4>{value.title}</h4></Link>
                  </div>
                )
            })}
          </div>
    </>
    )
}

function Recommendations(){
    return(
    <div>
        <h3 className='p-2'>Recommendations</h3>
        <MovieCard/>
    </div>
    )
}



export default Home
