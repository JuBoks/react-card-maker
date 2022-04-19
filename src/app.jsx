import './app.css';
import Login from './components/login';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home';

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
      </>
  );
}

export default App;
