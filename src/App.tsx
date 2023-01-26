import { useAppSelector } from './store/store';
import { Routes, Route, Link } from 'react-router-dom';
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

  const currentUsername = useAppSelector(state => state.user?.name);

  return (
    <div className="App">
      <Routes>
        <Route index path="/*" element={<>
          <header>{
            currentUsername || <>
              <Link to="login">Login</Link> to proceed
            </>
          }</header>
          <main>
            <HeroCard hero={superman} />
          </main>
        </>} />
        <Route path="login" element={<>
          <header>Login</header>
          <LoginForm /></>
        } />
      </Routes>
    </div>
  );
}

export default App;
