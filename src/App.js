import './App.css';
import { FetchFilms, FetchPeople} from './FetchInfo';

export function App() {
  return (
    <div className="App">
      <FetchFilms />
      <FetchPeople />
    </div>
  );
}

export default App;
