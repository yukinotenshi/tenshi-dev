import React from 'react';
import './MenuPage.css';
import {Link} from "react-router-dom";


function MenuPage() {
  return (
    <div className="page container">
      <div className="menu-row">
        <div className="menu-item filler">
        </div>
        <Link to="/works" className="menu-item">
          <p>Works</p>
        </Link>
        <div className="menu-item filler">
        </div>
      </div>
      <div className="menu-row">
        <Link to="/about" className="menu-item">
          <p>About</p>
        </Link>
        <div className="menu-item active">
          <p>Menu</p>
        </div>
        <div className="menu-item">
          <p>Contact</p>
        </div>
      </div>
      <div className="menu-row">
        <div className="menu-item filler">

        </div>
        <Link to="/" className="menu-item">
          <p>Home</p>
        </Link>
        <div className="menu-item filler">

        </div>
      </div>
    </div>
  );
}


export default MenuPage;