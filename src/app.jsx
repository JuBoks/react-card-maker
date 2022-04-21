import styles from './app.module.css';
import Login from './components/login/login';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './components/home/home';

function App({authService}) {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("error");
      })
  };

  const onLogin = (provider) => {
    authService.login(provider)
      .then((result) => {
        const token = authService.getCredential(provider, result).accessToken;
        navigate("/home", {state: {token}});
      })
  }

  return (
      <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login onLogin={onLogin}/>} />
        <Route path="home" element={<Home onLogout={onLogout} />} />
      </Routes>
      </div>
  );
}

export default App;
