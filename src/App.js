import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Cookies } from "./component/cookies";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import People from "./pages/People";
import Films from "./pages/Films";
import Starships from "./pages/Starships";
import Species from "./pages/Species";
import { Route, Routes} from "react-router-dom";
import Planets from "./pages/Planets";
import Vehicles from "./pages/Vehicles";
import Cryptos from "./pages/CryptoSearch";
import Search from "./pages/Search";

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
          <Route path="/cryptos" element={<Cryptos/>}/>
          <Route path="/Search" element={<Search/>}/>
        </Routes>
      </div>
      {acceptCookie ? null : <Cookies acceptCookies={handleAgreeToCookies} />}
    </div>
  );
}
export default App;
