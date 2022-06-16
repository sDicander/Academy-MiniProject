import "./App.css";

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
      <h1 className="hybrid">Welcome to our hybrid site</h1>

      {/* <button onClick={resetLocalStorage}>Clear storage</button> */}
      {acceptCookie ? null : <Cookies acceptCookies={handleAgreeToCookies} />}

      <FetchFilms />
      <FetchPeople />
    </div>
  );
}

export default App;
