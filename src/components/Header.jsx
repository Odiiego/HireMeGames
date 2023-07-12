import React from 'react';
import { NavLink } from 'react-router-dom';
import headerImg from '../assets/header-img.png';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = getAuth();

  function handleLogout() {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <header className="header">
      <nav className="header__nav">
        {!currentUser && <NavLink to="/auth/signup">Sign up</NavLink>}
        {!currentUser && <NavLink to="/auth/login">Login</NavLink>}
        {currentUser && <NavLink onClick={handleLogout}>Logout</NavLink>}
      </nav>
      <h1 className="header__title">
        Hire
        <br />
        Me
        <br />
        Games
      </h1>
      <img className="header__img" src={headerImg} alt="gaming draw" />
    </header>
  );
};

export default Header;
