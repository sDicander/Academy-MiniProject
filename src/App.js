import "./App.css";
import {
  
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Cookies } from "./component/cookies";


import { FetchFilms, FetchPeople, FetchStarships, FetchSpecies } from "./component/FetchInfo";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import People from "./pages/People";
import Films from "./pages/Films";
import Starships from "./pages/Starships";
import Species from "./pages/Species";
import { Route, Routes} from "react-router-dom";
import Planets from "./pages/Planets";
import Vehicles from "./pages/Vehicles";


function App() {
  const [acceptCookie, setAcceptCookie] = useState(
    localStorage.getItem("accepted cookies") === "true"
  );




  const handleAgreeToCookies = () => {
    localStorage.setItem("accepted cookies", "true");
    setAcceptCookie(true);
  };

  
  return (
    <div className="App">


      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/films" element={<Films/>}/>
          <Route path="/starships" element={<Starships/>}/>
          <Route path="/species" element={<Species/>}/>
          <Route path="/planets" element={<Planets/>}/>
          <Route path="/vehicles" element={<Vehicles/>}/>
        </Routes>
      </div>
      {acceptCookie ? null : <Cookies acceptCookies={handleAgreeToCookies} />}


      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand href="#">Welcome to Allt i allo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link to="/home">Home</Nav.Link>
          <Nav.Link to="/about">Weather</Nav.Link>
          <Nav.Link to="/contact">Films</Nav.Link>
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
