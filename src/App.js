import React, {useState, useEffect} from 'react';
import { Search,SSearch } from './component/Search';
import './App.css';

function App() {
  const [data, setData] = useState([]);
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
  const [searchData, setSearchData] = useState([]);
  async function Handle(event){
    event.preventDefault();
    const data = await fetch("https://www.swapi.tech/api/people?page=1&limit=5000")
    .then(res => res.json())
    .then(j => j.results);
    console.log(data)
    var b = data.map(x=> x.name)
    console.log(event.target.sok)
    var a = Search({array:b, search:event.target.sok.value})
  setSearchData(a)
  
  
  // var items = data.map(x=> x.name);
  
  }

  
  return (
  <div className="App">
      <form onSubmit={Handle}>
        <select name="typ" id="typ">
          <option value="namn">Namn</option>
          <option value="namn">Planeter</option>
          <option value="namn">Skepp</option>

        </select>
        <input type="search" id="sok"/>
        <button type="submit">Sök</button>
      </form>
      <ul>
        
        <Search array={items} search={'lu'}/>
        {searchData}
      </ul>

    </div>
  );
}
  
  export default App;
  