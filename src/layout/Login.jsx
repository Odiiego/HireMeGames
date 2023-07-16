import React from 'react';
import './auth.scss';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import SigninForm from '../components/SigninForm';

function Login() {
  return (
    <>
      <Header />
      <h1 className="auth__title">Login</h1>
      <SigninForm />
      <p className="auth__text">
        No account yet? <NavLink to="/auth/signup">Sign up</NavLink>
      </p>
    </>
  );
}

export default Login;
