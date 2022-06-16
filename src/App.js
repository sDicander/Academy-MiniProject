import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  function main(){
    fetch("https://www.swapi.tech/api")
    .then(res => res.json())
    .then(data => console.log(data))
  }
  function People(){

    useEffect(() => {fetch("https://www.swapi.tech/api/people?page=1&limit=5000")
    .then(res => res.json())
    .then(x=> x.results)
    .then(x=> setData(x))}, [])
  }
    
  const items = data.map(x=> <li>{x.name}</li>);
  console.log(items);
  function films(){
    fetch("https://www.swapi.tech/api/films")
    .then(res => res.json())
    .then(data => console.log(data))
  }
  function planets(){
    fetch("https://www.swapi.tech/api/planets")
    .then(res => res.json())
    .then(data => console.log(data))
  }
  
  
  
  return (
    <div className="App">
      <peo
      <ul>
        {items}
      </ul>

    </div>
  );
}

export default App;
