
import './App.css';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


import React, { useState } from "react";
import { Cookies } from "./component/cookies";

import { FetchFilms, FetchPeople } from "./component/FetchInfo";


function App() {
  const [acceptCookie, setAcceptCookie] = useState(
    localStorage.getItem("accepted cookies") === "true"
  );
  // const resetLocalStorage = () => {
  //   localStorage.removeItem("accepted cookies");
  //   setAcceptCookie(false);
  // };
  const handleAgreeToCookies = () => {
    localStorage.setItem("accepted cookies", "true");
    setAcceptCookie(true);
  };

  return (

    <div className="App">
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
      <h1 className="hybrid">Welcome to our hybrid site</h1>

      {/* <button onClick={resetLocalStorage}>Clear storage</button> */}
      {acceptCookie ? null : <Cookies acceptCookies={handleAgreeToCookies} />}

      <FetchFilms />
      <FetchPeople />

    </div>
  );
}

export default App;
