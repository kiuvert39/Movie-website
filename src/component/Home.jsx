import React from 'react'
import "../component/player.css"
import data from "../JSON/Recommendation.json"
import LatestMovies from './LatestMovies.jsx';
import { Link } from 'react-router-dom';


function Home() {
  return (
     <div className="mt-5">
        <SplashImage/>
        <div className="d-flex moveleft justify-content-center mobile ">     
          <LatestMovies/>
          <Recommendations/>
        </div>     
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
                    <img src={value.url} alt="poster" className='card-width'/>
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
        <h4 className="linker btn-outline-light"><Link to="/Movies" className="no-decoration btn btn-outline-light">More Movies</Link></h4>
    </div>
    )
}

function SplashImage() {
    return(
        <div className="h-100 mt-5">
              <div className="h-100 mt-5 p-5 text-white bg-primary border rounded-3">
                <h2>Find Great Movies For Your Entertainment</h2>
                <button className="btn btn-outline-light"><Link to="/Movies" className="btn btn-outline-light text-dark text-bold">Get Started</Link></button>
              </div>
        </div>
    )
}



export default Home
