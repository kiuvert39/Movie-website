import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';



function NavbarMain(){

    const [modalShow, setModalShow] = React.useState(false);
    return(
    <>
      <Navbar expand="lg" className="navbar navbar-dark bg-dark " >
      <Container fluid>
      <Navbar.Brand><h1 > Movie<mark>Zone</mark></h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll >
           <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Movies">Movies</Nav.Link>  
          </Nav>
          <Form className="d-flex">
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
          </Form>         
        </Navbar.Collapse>
        <Button variant="outline-success"onClick={() => setModalShow(true)}>Search</Button>
      </Container>
    </Navbar>
    </>
    )
}
function MyVerticallyCenteredModal(props){
    
  
    return (
      <>
        <Modal {...props}size="lg"aria-labelledby="contained-modal-title-vcenter" centered className='SRCh1'>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Search
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div class="input-group">
              <input type="search" class="form-control rounded" placeholder="Search"aria-label="Search"aria-describedby="search-addon" />
              <button type="button" class="btn btn-outline-primary">search</button>
            </div>
          </Modal.Body>          
            <Button onClick={props.onHide}>Close</Button>          
      </Modal>
      </>
    )
}


export default NavbarMain