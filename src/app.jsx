import styles from './app.module.css';
import Login from './components/login/login';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home';

function App({authService}) {
  return (
      <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login authService={authService}/>} />
        <Route path="home" element={<Home />} />
      </Routes>
      </div>
  );
}

export default App;
