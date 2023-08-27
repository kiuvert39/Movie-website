import React, { useState } from 'react'
import { db } from '../Firebase Config/firebase'
import { collection, addDoc } from "firebase/firestore";
import "./player.css";

function Animation ()  {

  const [movieTitle, setMovieTitle] = useState()
  const [movieLength, setMovieLength] = useState()
  const [movieFile, setMovieFile] = useState()
  const [imagePoster, setImagePoster] = useState()

  const moviesCollection = collection(db, "animation")

  const uploadMovie = async () => {
    try {
          await addDoc(moviesCollection, {
             title: movieTitle, 
             duration: movieLength,
             poster: imagePoster,
             file: movieFile
            })
            window.location.reload(true)
    } catch (err) {
       console.error(err)
    }
  }

  return (
    <section className="m-top d-flex flex-column justify-content-center align-items-center">
        <h2>Animation Upload</h2>
        <div className="form-outline mb-4">
          <label className="form-label labeler" htmlFor="Movie Name">Movie Name</label>                      
          <input className="input-style" type="text" onChange={(e) => { setMovieTitle(e.target.value) }} placeholder="Movie Name"/>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label labeler" htmlFor="Duration">Duration</label>
          <input className="input-style" type="text" onChange={(e) => { setMovieLength(Number(e.target.value)) }} placeholder="Duration"/>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label labeler" htmlFor="Image Url">Image Url</label>
          <input className="input-style" type="text" onChange={(e) => { setImagePoster(e.target.value) }} placeholder="Image Url"/>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label labeler" htmlFor="file">File</label>
          <input className="input-style" type="text" onChange={(e) => { setMovieFile(e.target.value) }} placeholder="File"/>
        </div>

        <div>
          <button className="btn btn-outline-primary" onClick={ uploadMovie }>Submit</button>
        </div>
    </section>
  );
};

export default Animation;


