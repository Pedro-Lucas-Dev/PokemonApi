import './App.css';
import {Card} from './components/Card/Card.jsx'
import {ListPokemon} from './components/ListPokemon/ListPokemon.jsx'
import {Trainers} from './components/Trainers/Trainers.jsx'

function App() {
  return (
    <div className="App">
      <Card 
        titulo=" Pokedex "
        color="#ED1C24"
      >
        <ListPokemon />
      </Card>
      
        
      <Card
        titulo="  "
        color="#69D2E7"
      >
        <Trainers />
      </Card>
     
    </div>
  );
}

export default App;
