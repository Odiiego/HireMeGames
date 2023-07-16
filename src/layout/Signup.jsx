import React from 'react';
import './auth.scss';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

function Signup() {
  return (
    <>
      <Header />
      <h1 className="auth__title">Sign Up</h1>
      <SignupForm />
      <p className="auth__text">
        Already have an account?
        <NavLink to="/auth/login">Sign in</NavLink>
      </p>
    </>
  );
}

export default Signup;
