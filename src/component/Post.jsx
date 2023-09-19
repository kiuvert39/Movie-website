import React, { useState } from 'react'
import { db } from '../Firebase Config/firebase'
import { addDoc, collection } from "firebase/firestore";
import "./player.css";

function Post ()  {

  const [movieTitle, setMovieTitle] = useState()
  const [movieLength, setMovieLength] = useState()
  const [imagePoster, setImagePoster] = useState()
  const [movieGenre, setMovieGenre] = useState()
  const [movieFile, setMovieFile] = useState()
  
  const collectionData = collection(db, "movies")

  const uploadMovie = async () => {
    try {
          await addDoc(collectionData, {
             title: movieTitle, 
             duration: movieLength,
             poster: imagePoster,
             genre: movieGenre,
             file: movieFile
            })
            window.location.reload(true)
    } catch (err) {
       console.error(err)
    }
  }

  return (
    <section className="m-top d-flex flex-column justify-content-center align-items-center">
        <h2>Movie Upload</h2>
        <div className="mb-4">
          <label htmlFor="Movie Name">Movie Name</label>                      
          <input type="text" onChange={(e) => { setMovieTitle(e.target.value) }} placeholder="Movie Name"/>
        </div>

        <div className="mb-4">
          <label htmlFor="Duration">Duration</label>
          <input type="text" onChange={(e) => { setMovieLength(Number(e.target.value)) }} placeholder="Duration"/>
        </div>

        <div className="mb-4">
          <label htmlFor="Image Url">Image Url</label>
          <input type="text" onChange={(e) => { setImagePoster(e.target.value) }} placeholder="Image Url"/>
        </div>

        <div className="mb-4">
          <label htmlFor="Genre">Genre</label>
          <input type="text" onChange={(e) => { setMovieGenre(e.target.value) }} placeholder="Genre"/>
        </div>

        <div className="mb-4">
          <label htmlFor="file">File</label>
          <input type="text" onChange={(e) => { setMovieFile(e.target.value) }} placeholder="File"/>
        </div>

        <div>
          <button className="btn btn-outline-primary" onClick={ uploadMovie }>Submit</button>
        </div>
    </section>
  );
};

export default Post;
