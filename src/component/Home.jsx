import React, { useState } from 'react'
import "../component/player.css"
import data from "../JSON/Recommendation.json"
import Button from 'react-bootstrap/Button';
import LatestMovies from './LatestMovies.jsx';



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
                    <h4>{value.title}</h4>
                    <p>{value.duration}</p>
                    <Button variant="outline-success">Download</Button>
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
