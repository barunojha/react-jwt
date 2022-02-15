import { Link } from 'react-router-dom';
import React from 'react';
import "./molecules.css";

function Navbar() {
  return ( 
    <>
      <nav className='navbar'>
        <div className="row">
          <div className="col">
            <h1>FOOD APP</h1>
          </div>
        </div>
        <div className='col'>
          <Link to="/">LoginPage</Link>
          <Link to="/loggedIn">AfterLogin</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;