function Welcome(props){
  return(
    < div className="Welcome">

      <p>{props.titel}</p>
      <p> {props.Date}</p>
      

      
      </div>

  )
}

export default function Home() {
  return (
    <div>

      <h1 className="home">Home</h1>
      <Welcome titel="Välkommen till vår hemsida" />
      <Welcome Date={new Date().toLocaleDateString()}/>
      


    </div>

  );
}