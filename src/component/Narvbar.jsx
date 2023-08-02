import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';


function NavbarMain(){

    const [modalShow, setModalShow] = React.useState(false);
    return(
    <>

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><h1 > Movie<mark>Zone</mark></h1></Navbar.Brand>
          <Nav className="me-auto color1">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Movies">Movies</Nav.Link>
            <Nav.Link href="/Request">Request</Nav.Link>
          </Nav>
        </Container>
        <div className='SRCh'>                            
              <Button variant="primary" onClick={() => setModalShow(true)}>Search</Button>
                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
            </div>
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