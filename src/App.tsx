import './App.css';
import type { Hero } from './data/HeroesData';
import uuid from 'react-uuid';
import HeroCard from './components/HeroCard';

function App() {

  const superman: Hero = {
    name: 'Superman',
    ability: 'defender',
    guid: uuid(),
    trainingStartingDate: new Date(1980, 0, 1),
    suitColors: ['blue', 'red'],
    startingPower: 1000,
    currentPower: 10000,
  }

  return (
    <div className="App">
      <HeroCard hero={superman} />
    </div>
  );
}

export default App;
