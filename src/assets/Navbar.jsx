import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './Img/logo.png';
export default function NavBar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className='brand-logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Our Success</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
