import React from 'react'
import serise from "./Seriese.json"
import Button from 'react-bootstrap/Button';

const Seriese = () => {
  return (
    <div>
            <h3 className='p-2'>Seriese Movies</h3>
             <div className='m-1 p-0 flex-wrap d-flex gap-2'>
             {serise.map( (value) =>{
                return(
                    <div>
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

export default Seriese
