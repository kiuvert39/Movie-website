import React from 'react'
import latestMovies from "../JSON/LatestMovies.json"
import Button from 'react-bootstrap/Button';

const LatestMovies = () => {
  return (
    <div >
            <h3 className='p-2'>Latest Movies</h3>
             <div className=' p-0 flex-wrap d-flex gap-2'>
             {latestMovies.map((value) =>{
                return(
                    <div key={value.id}>
                        <img src={value.url} alt="error image"  className='card-width'/>
                        <h4>{value.title}</h4>
                        <p>{value.duration}</p>
                        <Button variant="outline-success">Download</Button>
                    </div>
                )
             })}
             </div>

    </div>
  )
}

export default LatestMovies
