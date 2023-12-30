import React, { useState, useEffect } from 'react'
import "../component/player.css"
import Button from 'react-bootstrap/Button';
import { db } from '../Firebase Config/firebase'
import { collection, getDocs } from "firebase/firestore";
import Home from './Home';


const Movies = () => {

  const [movies, setMovies] = useState([])

  const moviesCollection = collection(db, "movies")

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getDocs(moviesCollection);
        const movieList = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
        setMovies(movieList)
      } catch (err) {
        console.error(err)
      }
    }
    getMovies()
  }, [])

  return (
    <>
      <Home />
      <div className='p-2'>
        <h2>Movies</h2>
        <div className='flex-wrap d-flex gap-2'>
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <img src={movie.poster} alt="not found" className='card-width' />
                <h4>{movie.title}</h4>
                <div>
                  <p>{movie.duration}</p>
                  <p>{movie.releaseDate}</p>
                </div>
                <p className='opacity-25' style={{ fontSize: '0.7rem' }}>{movie.genre}</p>
                <Button variant="outline-success" className="no-decoration outline-success"><a href={movie.file} rel="noreferrer" target="_blank" className="no-decoration text-warning">Download</a></Button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}


export default Movies
