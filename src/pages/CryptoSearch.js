import { Crypto } from "../component/crypto";

function Artikel(props) {
return (
  <div>

    <h1>{props.titel}</h1>
    <h3> {props.text}</h3>
  </div>
)
}



export default function Cryptos() {
  return (
    <div>
      <Artikel titel="Search for a crypto"/>
    <Crypto />
    </div>


  );
}