import logo from './logo.svg';
import './App.css';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';








function App() {
  return (
    <div>


      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand href="#">Welcome to Allt i allo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  to="/home">Home</Nav.Link>
            <Nav.Link  to="/about">Weather</Nav.Link>
            <Nav.Link  to="/contact">Films</Nav.Link>


          </Nav>

        
      </Navbar>






    </div>
  );
}

export default App;
