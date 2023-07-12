import React from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import SigninForm from '../components/SigninForm';

function Login() {
  return (
    <>
      <Header />
      <h1>Login</h1>
      <SigninForm />
      <p>
        No account yet? <NavLink to="/auth/signup">Sign up</NavLink>
      </p>
    </>
  );
}

export default Login;
