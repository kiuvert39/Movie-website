import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import SearchMovies from "./SearchModal";


function NavbarMain(){

    const [modalShow, setModalShow] = React.useState(false);
    return(
    <>
      <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container fluid>
      <Navbar.Brand><h1> Movie<mark>Zone</mark></h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
           <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Movies">Movies</Nav.Link>  
          </Nav>        
          <Button variant="outline-success fill-success"onClick={() => setModalShow(true)}>Search</Button>
        </Navbar.Collapse>
            <SearchMovies show={modalShow} onHide={() => setModalShow(false)}/>

      </Container>
    </Navbar>
    </>
    )
}

  

export default NavbarMain
