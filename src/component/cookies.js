import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";



export const Cookies = (props) => {
  return (
    <div className="Cookies">
      <p>
        Please accept cookies. We want to know you!
      </p>
      <Button  variant="primary" onClick={props.acceptCookies}>Accept</Button>
    
    
    </div>
  );
}
