import React from 'react';
import './HomePage.css';
import {Link} from "react-router-dom";


function HomePage() {
  return (
    <div>
      <Link to="/menu">
        <div className="box logo container">
          TENSHI
        </div>
      </Link>
      <div className="contact container">
        <a href="https://github.com/yukinotenshi" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/tenshi.dev" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>
  );
}

export default HomePage;
