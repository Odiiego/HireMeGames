import React from 'react';
import headerImg from '../assets/header-img.png';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
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
