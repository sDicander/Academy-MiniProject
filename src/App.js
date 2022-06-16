
import './App.css';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


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

    </div>
  );
}
export default App;
