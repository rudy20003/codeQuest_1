import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <h1>CodeQuest</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Header;
