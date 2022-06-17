import React, {useState, useEffect} from 'react'; 
export default function Searchp() {
  const [searchData, setSearchData] = useState([]);

  async function Handle(event) {
    event.preventDefault();
    let data;
    let b;
    switch (event.target.typ.value){
      case "namn":
      data = await fetch(
        "https://www.swapi.tech/api/people?page=1&limit=5000"
      )
        .then((res) => res.json())
        .then((j) => j.results);
        b = data.map((x) => x.name);
        break;
        case "planeter":
          data = await fetch(
            "https://www.swapi.tech/api/planets?page=1&limit=5000"
          )
            .then((res) => res.json())
            .then((j) => j.results);
            b = data.map((x) => x.name);
            break;
          case "filmer":
            data = await fetch(
              "https://www.swapi.tech/api/filmer?page=1&limit=5000"
            )
              .then((res) => res.json())
              .then((j) => j.results);
              b = data.map((x) => x.title);
              break;
              case "skepp":
                data = await fetch(
                  "https://www.swapi.tech/api/starships?page=1&limit=5000"
                )
                  .then((res) => res.json())
                  .then((j) => j.results);
                  b = data.map((x) => x.name);

              break;
              case "fordon":
                data = await fetch(
                  "https://www.swapi.tech/api/vehicles?page=1&limit=5000"
                )
                  .then((res) => res.json())
                  .then((j) => j.results);
                  b = data.map((x) => x.name);
        default:
          break;
      }

    


    var a = Search({ array: b, search: event.target.sok.value });
    setSearchData(a);}

  return (

    <><h1>Search</h1><div className="Appgs">
      <form onSubmit={Handle}>

        <select name="typ" id="typ">
          <option value="namn">Karaktärer</option>
          <option value="planeter">Planeter</option>
          <option value="filmer">Filmer</option>
          <option value="skepp">Rymdskepp</option>
          <option value="fordon">Fordon</option>
        </select>
        <input type="search" id="sok" />
        <button type="submit">Sök</button>
      </form>
      <ul>
        {searchData}
      </ul>

    </div></>


  );
}



export function Search(props) {
//   var ret = [];
  var ret = props.array.filter(x=> x.toLowerCase().includes(props.search.toLowerCase()) );
  ret = ret.map(x=> <li>{x}</li>)
//   props.array
//       .then((x) => {
//       x.toLowerCase();
//     })
//     .then((x) => {
//       if (x.indexOf(props.search.toLowerCase()) !== -1) {
//         ret.push(x);
//       }
//     });
  return(
        <div>{ret}</div>
       )
}
