import React from 'react';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({onLogin, onAuthChanged}) => {

  useEffect(() => {
    console.log('start')
    onAuthChanged();
  })

  return (
    <section className={styles.loginContainer}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.btnLogin} onClick={() => {onLogin('Google')}}>Google</button>
          </li>
          <li>
            <button className={styles.btnLogin} onClick={() => {onLogin('Github')}}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
)};

export default Login;