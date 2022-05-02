import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './home.module.css';

const Home = ({ onLogout, authService }) => {
  const navigate = useNavigate();

  useEffect(() => {
    authService.onAuthChanged(user => {
      if (!user){
        navigate("/");
      }
    })
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