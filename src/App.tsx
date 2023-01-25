import { useAppSelector } from './store/store';
import { Routes, Route } from 'react-router-dom';
import type { Hero } from './data/HeroesData';
import uuid from 'react-uuid';
import HeroCard from './components/HeroCard';
import LoginForm from './components/login/LoginForm';

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

  const currentUser = useAppSelector(state => state.user);

  return (
    <Routes>
      <Route index path="/*" element={
        <div className="App">
            {currentUser ? currentUser.name : 'login to proceed'}
            <HeroCard hero={superman} />
          </div>
      } />
      <Route path="login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
