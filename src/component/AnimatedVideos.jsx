import React, { useState, useEffect } from 'react'
import "../component/player.css"
import Button from 'react-bootstrap/Button';
import { db } from '../Firebase Config/firebase'
import { collection, getDocs } from "firebase/firestore";


const AnimatedVideos = () => {

  const [movies, setMovies] = useState([])

  const moviesCollection = collection(db, "animation")

  useEffect(() => {
    const getMovies = async () => {
       try {
         const data = await getDocs(moviesCollection);
         const movieList = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
         }))
         console.log(movieList)
         setMovies(movieList)
       } catch (err) {
         console.error(err)
       }
    }
    getMovies()
  }, [])

  return (
    <div className='moveleft'>
       <h2>Animation</h2>
       <div className=' p-0  flex-wrap d-flex gap-2'>
             {movies.map((movie) =>{
                return(
                    <div key={movie.id}>
                        <img src={movie.poster} alt="error image"  className='card-width'/>
                        <h4>{movie.title}</h4>
                        <p>{movie.duration}</p>
                        <Button variant="outline-success"><a href={movie.file} className="no-decoration">Download</a></Button>
                    </div>
                )
             })}
             </div>
    </div>
  )
}


export default AnimatedVideos
