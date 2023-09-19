import React from 'react'
import latestMovies from "../JSON/LatestMovies.json"
import { Link } from 'react-router-dom';

const LatestMovies = () => {
  return (
    <div>
            <h3 className='p-2'>Latest Movies</h3>
             <div className=' p-0 flex-wrap d-flex gap-2'>
             {latestMovies.map((value) => {
                return(
                    <div key={value.id}>
                        <img src={value.url} alt="error image"  className='card-width'/>
                        <Link to="/Movies" style={{ textDecoration:"none" }}><h5>{value.title}</h5></Link>
                    </div>
                )
             })}
             </div>
             <h4 className="linker btn-outline-light"><Link to='/Movies' className="no-decoration btn btn-outline-light">More Movies</Link></h4>
    </div>
  )
}

export default LatestMovies
