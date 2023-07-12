import React from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

function Signup() {
  return (
    <>
      <Header />
      <h1>Sign Up</h1>
      <SignupForm />
      <p>
        Already have an account?
        <NavLink to="/auth/login">Sign in</NavLink>
      </p>
    </>
  );
}

export default Signup;
