import './App.css';
import {Card} from './components/Card/Card.jsx'
import {ListPokemon} from './components/ListPokemon/ListPokemon.jsx'

function App() {
  return (
    <div className="App">
      <Card 
        titulo=" Pokedex "
      >
        <ListPokemon />
      </Card>
    </div>
  );
}

export default App;
