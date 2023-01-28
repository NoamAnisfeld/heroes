import { useAppSelector } from './store/store';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './components/main/Main';
import LoginForm from './components/login/LoginForm';

function App() {

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
          <Main />
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
