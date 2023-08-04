import React from "react";
import Modal from 'react-bootstrap/Modal';
import Movies from "./Movies";
import { useState } from "react";
import movieFiles from "../JSON/Movies.json"
import Button from "react-bootstrap/esm/Button";


function SearchMovies(props) {

    const [search, setSearch] = useState('')

      
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ color: 'black' }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Search Here.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="search" className="form-control rounded" placeholder="exp: the Flash" onChange={(e) => setSearch(e.target.value)}/> 

            <div className="d-flex flex-wrap gap-2 m-2">
                {
                  movieFiles.filter((value) => {
                    if(search === "") {
                      return value
                   } else if(value.title.toLowerCase().includes(search.toLowerCase())) {
                      return value
                   } 
                  }).map((value) => {
                     return (
                          <div key={value.id}>
                            <img src={value.url} alt="movie cover image" className='card-width'/>
                            <h4>{value.title}</h4>
                            <p>{value.duration}</p>
                            <Button variant="outline-success">Download</Button>
                          </div>
                     )
                  })
                }
            </div>            
          </Modal.Body>
  
        </Modal>
      );
    }

export default SearchMovies