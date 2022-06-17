import React, { useState, useEffect } from 'react';
import GridSystem from './GridSystem';
import PropagateLoader from 'react-spinners/PropagateLoader';

export function FetchFilms() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/films?page=1&limit=5000")
    .then(res => res.json())
    .then(json => setData(json.result));
  }, []);
  
  const movieItems = data.map(m => <li key={m._id}>{m.properties.title}</li>);
  if (data.length > 1) {
    //console.log(data);
  }
  
  return (
    <div>
      {loading ? (
        <PropagateLoader size={30} color={'#F37A24'} loading={loading} />
      ) : (
      <GridSystem colCount={2} md={6}>  
        {movieItems}
      </GridSystem>
      )}
    </div>
  );
}

export function FetchPeople() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/People?page=1&limit=5000")
      .then(res => res.json())
      .then(json => setData(json.results));
  }, []);

  const movieItems = data.map(m => <li key={m.uid}>{m.name}</li>);
  if (data.length > 1) {
    console.log(data);
  }

  return (
    <div>
      {loading ? (
        <PropagateLoader size={30} color={'#F37A24'} loading={loading} />
      ) : (
      <GridSystem colCount={2} md={6}>  
        {movieItems}
      </GridSystem>
      )}
    </div>
  );
}

export function FetchStarships() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/Starships?page=1&limit=5000")
      .then(res => res.json())
      .then(json => setData(json.results));
  }, []);

  const movieItems = data.map(m => <li key={m.uid}>{m.name}</li>);
  if (data.length > 1) {
    console.log(data);
  }

  return (
    <div>
      {loading ? (
        <PropagateLoader size={30} color={'#F37A24'} loading={loading} />
      ) : (
      <GridSystem colCount={2} md={6}>  
        {movieItems}
      </GridSystem>
      )}
    </div>
  );
}

export function FetchSpecies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/Species?page=1&limit=5000")
      .then(res => res.json())
      .then(json => setData(json.results));
  }, []);

  const movieItems = data.map(m => <li key={m.uid}>{m.name}</li>);
  if (data.length > 1) {
    console.log(data);
  }

  return (
    <div>
      {loading ? (
        <PropagateLoader size={30} color={'#F37A24'} loading={loading} />
      ) : (
      <GridSystem colCount={2} md={6}>  
        {movieItems}
      </GridSystem>
      )}
    </div>
  );
}

export function FetchVehicles() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/Vehicles?page=1&limit=5000")
      .then(res => res.json())
      .then(json => setData(json.results));
  }, []);

  const movieItems = data.map(m => <li key={m._id}>{m.name}</li>);
  if (data.length > 1) {
    console.log(data);
  }

  return (
    <div>
      {loading ? (
        <PropagateLoader size={30} color={'#F37A24'} loading={loading} />
      ) : (
      <GridSystem colCount={2} md={6}>  
        {movieItems}
      </GridSystem>
      )}
    </div>
  );
}

export function FetchPlanets() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/Planets?page=1&limit=5000")
      .then(res => res.json())
      .then(json => setData(json.results));
  }, []);

  const movieItems = data.map(m => <li key={m.uid}>{m.name}</li>);
  if (data.length > 1) {
    console.log(data);
  }

  return (
    <div>
      {loading ? (
        <PropagateLoader size={30} color={'#F37A24'} loading={loading} />
      ) : (
      <GridSystem colCount={2} md={6}>  
        {movieItems}
      </GridSystem>
      )}
    </div>
  );
}
