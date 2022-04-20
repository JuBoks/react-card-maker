import './app.css';
import Login from './components/login/login';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home';

function App({authService}) {
  return (
      <>
      <Routes>
        <Route path="/" element={<Login authService={authService}/>} />
        <Route path="home" element={<Home />} />
      </Routes>
      </>
  );
}

export default App;
