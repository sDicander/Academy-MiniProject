import React from "react";
import { useState } from "react";

export const Crypto = () => {
  const [query, setQuery] = useState("");
  const [container, setContainer] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5821189730msh825d291d7079e5ap126386jsndba9797c917f",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  // let cryptoCoins = container.map(c => <li key={c.uuid}>{c.name}</li>)

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(
        `https://coinranking1.p.rapidapi.com/coins?timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&search=${query}&orderDirection=desc&limit=50&offset=0`,
      //  https://coinranking1.p.rapidapi.com/coins?timePeriod=24h&symbols%5B0%5D=${query}&tiers%5B0%5D=1&orderBy=marketCap&search=${query}&orderDirection=desc&limit=50&offset=0,
options
      )
        .then((response) => response.json())
        .then((json) => setContainer(json.data.coins), setQuery(""))
        .catch((err) => console.error(err));
    }
  };

  return (
    <main>
      <ul>
        {container.map((c) => (
          <li key={c.uuid}>{c.name}</li>
        ))}
      </ul>
      <div className="enterCrypto">Enter crypto</div>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {typeof container.main != "undefined"
        ? (console.log(container.main),
          (
            <div>
              <div className="coins-box">
                <div className="coins"> asd</div>
              </div>
              <div className="container-box"></div>
            </div>
          ))
        : ""}
    </main>
  );
};
