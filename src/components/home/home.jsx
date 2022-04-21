import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './home.module.css';

const Home = ({ onLogout }) => {
  const navigate = useNavigate();
  const state = useLocation();

  useEffect(() => {
    if (!state.state || !state.state.token) {
      navigate("/");
    }
  }, []);
  
  return (
    <section className={styles.homeContainer}>
      <Header onLogout={onLogout} />
      <section className={styles.home}>
        <h1>Home Sweet Home!</h1>
      </section>
      <Footer />
    </section>
  )};

export default Home;