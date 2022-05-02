import styles from './app.module.css';
import Login from './components/login/login';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './components/home/home';

function App({authService}) {
  const navigate = useNavigate();

  const goToHome = (userId) => {
    navigate("/home", {state: {id: userId}});
  };

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
      .then((data) => {
        goToHome(data.user.uid);
      })
  };

  const onAuthChanged = () => {
    authService.onAuthChanged(user => {
      user && goToHome(user.uid);
    })
  };

  return (
      <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login onLogin={onLogin} onAuthChanged={onAuthChanged} />} />
        <Route path="home" element={<Home onLogout={onLogout} authService={authService} />} />
      </Routes>
      </div>
  );
}

export default App;
