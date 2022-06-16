import React, {useState, useEffect} from 'react';
import { Search } from './Search';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  // function main(){
  //   fetch("https://www.swapi.tech/api")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

    useEffect(() => {fetch("https://www.swapi.tech/api/people?page=1&limit=5000")
    .then(res => res.json())
    .then(j => setData(j.results));
}, []);
var items = data.map(x=> x.name);
    // .then(x=> x.results)
    // .map(x=> x.name)
    // .then(x=> setData(x))}, [])
  
  // setData(Search(items, "luke"))
  // const items = data.map(x=> <li>{x.name}</li>);
  // console.log(items);
  // function films(){
  //   fetch("https://www.swapi.tech/api/films")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }
  // function planets(){
  //   fetch("https://www.swapi.tech/api/planets")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }
  
  
  
  return (
    <div className="App">
      <ul>
        <Search array={items} search={'luke'}/>
      </ul>

    </div>
  );
}

export default App;
