import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavbarMain() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar navbar-dark bg-dark mb-3 fixed z-index-1 d-block"style={{ zIndex: 1 }}>
          <Container fluid>
            <Navbar.Brand><h1> Movie<mark>Maze</mark></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="no-border"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h1> Movie<mark>Maze</mark></h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-dark text-white">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#/" className="background-clr p-1">Movies</Nav.Link>
                  <Nav.Link href="#/Series" className="background-clr p-1">Series</Nav.Link>
                  <Nav.Link href="#/AboutUs" className="background-clr p-1">About Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarMain;




