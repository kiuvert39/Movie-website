import React, { useState } from 'react'
import { db } from '../Firebase Config/firebase'
import { collection, addDoc } from "firebase/firestore";
import "./player.css";

function Series ()  {

  const [movieTitle, setMovieTitle] = useState()
  const [movieLength, setMovieLength] = useState()
  const [imagePoster, setImagePoster] = useState()
  const [movieGenre, setMovieGenre] = useState()
  const [seriesFiles, setSeriesFiles] = useState("")

  const moviesCollection = collection(db, "animation")



  const uploadMovie = async () => {

    const episodes = seriesFiles.split(",")
    try {
          await addDoc(moviesCollection, {
             title: movieTitle, 
             duration: movieLength,
             poster: imagePoster,
             genre: movieGenre,
             file: episodes
            })
            window.location.reload(false)
            console.log(episodes)
    } catch (err) {
       console.error(err)
    }
  }


  return (
    <section className="m-top d-flex flex-column justify-content-center align-items-center">
        <h2>Series Upload</h2>
        <div className="m-2 d-flex align-items-center justify-center bg-none">
          <label className="" htmlFor="Movie Name">Movie Name</label>                      
          <input className="" type="text" onChange={(e) => { setMovieTitle(e.target.value) }} placeholder="Movie Name"/>
        </div>

        <div className="m-2 d-flex align-items-center justify-center bg-none">
          <label className="" htmlFor="Duration">Duration</label>
          <input className="outline-none border-none" type="text" onChange={(e) => { setMovieLength(Number(e.target.value)) }} placeholder="Duration"/>
        </div>

        <div className="m-2 d-flex align-items-center justify-center bg-none">
          <label className="" htmlFor="Image Url">Image Url</label>
          <input className="" type="text" onChange={(e) => { setImagePoster(e.target.value) }} placeholder="Image Url"/>
        </div>

        <div className="m-2 d-flex align-items-center justify-center bg-none">
          <label className="" htmlFor="Genre">Genre</label>
          <input className="" type="text" onChange={(e) => { setMovieGenre(e.target.value) }} placeholder="Genre"/>
        </div>

        <div className="m-2 d-flex align-items-center justify-center bg-none">
            <label htmlFor="school items" className="fs-3 d-block m-2">File links seperated by commas</label>
            <input type="text" className="" onChange={(e) => setSeriesFiles(e.target.value)} name="school items" placeholder="Enter files, with comma"/>
        </div>

        <div>
          <button className="btn btn-outline-primary" onClick={ uploadMovie }>Submit</button>
        </div>
    </section>
  );
};

export default Series;


