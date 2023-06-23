import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './../styles/Navbar.css';
import LogoImg from './../Assets/download.png';

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <nav>
      <div className="logo">
      <a href="https://www.faceprep.in" target="_blank" rel="noopener noreferrer">
  <img src={LogoImg} alt="logo" />
</a>

      </div>

      {loggedIn && (
        <div className="logout">
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
