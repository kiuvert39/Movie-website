import React from 'react'
import serise from "./Seriese.json"
import Button from 'react-bootstrap/Button';
import {HiOutlineStar} from 'react-icons/hi'

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
                        <div className="flex-wrap d-flex gap-1">
                          <HiOutlineStar/><HiOutlineStar/><HiOutlineStar/><HiOutlineStar/><HiOutlineStar/>
                        </div>
                        <Button variant="outline-success">Download</Button>
                    </div>
                )
             })}
             </div>

    </div>
  )
}

export default Seriese
