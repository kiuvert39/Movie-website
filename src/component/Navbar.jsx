import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


function NavbarMain(){

    return (
    <>
      <Navbar expand="lg" className="navbar navbar-dark bg-dark fixed">
      <Container fluid>
      <Navbar.Brand><h1> Movie<mark>Zone</mark></h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll>
           <Link to="/" className='no-decoration p-3'>Home</Link>
            <Link to="/Movies" className='no-decoration p-3'>Movies</Link>  
            <Link to="/AnimatedVideos" className='no-decoration p-3'>Series</Link>   
          </Nav>        
        </Navbar.Collapse>
           {/*  <SearchMovies show={modalShow} onHide={() => setModalShow(false)}/> */}

      </Container>
    </Navbar>
    </>
    )
}

  

export default NavbarMain
