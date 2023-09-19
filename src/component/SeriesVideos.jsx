import React, { useState, useEffect } from 'react'
import "../component/player.css"
import Button from 'react-bootstrap/Button';
import { db } from '../Firebase Config/firebase'
import { collection, getDocs } from "firebase/firestore";
import Modal from 'react-bootstrap/Modal';

const SeriesVideos = () => {

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
         setMovies(movieList)
       } catch (err) {
         console.error(err)
       }
    }
    getMovies()
  }, [moviesCollection])

  return (
    <div className='moveleft'>
       <h2>Series</h2>
       <div className=' p-0  flex-wrap d-flex gap-2'>
             {movies.map((movie) =>{
                return(
                    <div key={movie.id}>
                        <img src={movie.poster} alt="not found"  className='card-width'/>
                        <h4>{movie.title}</h4>
                        <p>{movie.duration}</p>
                        <p className='opacity-25' style={{ fontSize: '0.7rem' }}>{movie.genre}</p>
                        <ShowAnimationSeasons episode={movie} movie={movie}/>
                    </div>
                )
             })}
             </div>
    </div>
  )
}


function ShowAnimationSeasons(props) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-success" className="no-decoration outline-success" onClick={handleShow}>Download</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Downloads</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "black" }}>
        {
           props.movie.file.map(episodes => {
              return (
                <h6 key={episodes}><a href={episodes}>{episodes}</a></h6>
              )
          })
        } 
        </Modal.Body>
      </Modal>
    </>
  );
}




export default SeriesVideos
