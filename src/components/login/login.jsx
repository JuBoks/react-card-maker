import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({authService}) => {
  
  return (
    <section>
      <Header />
      <button onClick={() => {authService.login('google');}}>구글로 로그인</button>
      <button onClick={() => {authService.login('github');}}>깃헙으로 로그인</button>
      <Footer />
    </section>
)};

export default Login;