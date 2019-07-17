import React from 'react';
import './MenuPage.css';
import {Link} from "react-router-dom";


function MenuPage() {
  return (
    <div className="page container">
      <div className="menu-row">
        <div className="menu-item filler">
        </div>
        <Link to="/works" className="menu-item show-top-animate">
          <p>Works</p>
        </Link>
        <div className="menu-item filler">
        </div>
      </div>
      <div className="menu-row">
        <Link to="/about" className="menu-item show-left-animate">
          <p>About</p>
        </Link>
        <div className="menu-item active">
          <p>Menu</p>
        </div>
        <Link to="/contact" className="menu-item show-right-animate">
          <p>Contact</p>
        </Link>
      </div>
      <div className="menu-row">
        <div className="menu-item filler">

        </div>
        <Link to="/" className="menu-item show-bottom-animate">
          <p>Home</p>
        </Link>
        <div className="menu-item filler">

        </div>
      </div>
    </div>
  );
}


export default MenuPage;