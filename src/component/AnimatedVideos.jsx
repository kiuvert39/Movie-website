import React from 'react'
import anime from '../JSON/AnimatedVideos'
import Button from 'react-bootstrap/Button';
import "../component/player.css"

const AnimatedVideos = () => {
  return (
  <>  
   < div className='moveleft'>
      <h2>Animated Videos</h2>
    <div className=' p-0  flex-wrap d-flex gap-2'>
             {anime.map((value) =>{
                return(
                    <div key={value.id}  >
                        <img src={value.url} alt="error image"  className='card-width'/>
                        <h4>{value.title}</h4>
                        <p>{value.duration}</p>
                        <Button variant="outline-success">Download</Button>
                    </div>
                )
             })}
       </div>
       </div>
  </>
  )
}

export default AnimatedVideos
