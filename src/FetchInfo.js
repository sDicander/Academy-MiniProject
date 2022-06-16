import React, { useState, useEffect } from 'react';

export function FetchFilms() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/films")
      .then(res => res.json())
      .then(json => setData(json.result));
  }, []);

  const movieItems = data.map(m => <li key={m._id}>{m.properties.title}</li>);
  if (data.length > 1) {
    console.log(data);
  }

  return (
    <div className="App">
      <ul>
        {movieItems}
      </ul>
    </div>
  );
}

export function FetchPeople() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/People")
      .then(res => res.json())
      .then(json => setData(json.results));
  }, []);

  const movieItems = data.map(m => <li key={m.uid}>{m.name}</li>);
  if (data.length > 1) {
    console.log(data);
  }

  return (
    <div className="App">
      <ul>
        {movieItems}
      </ul>
    </div>
  );
}

