import React from 'react';
import './AboutPage.css';
import './ContactPage.css';
import {Link} from "react-router-dom";


function ContactPage() {
  return (
    <div className="page full-height container column">
      <div className="header container">
        <Link to="/menu" className="actual header box container">
          Back
        </Link>
        <div className="header-filler">
          <p>Contact</p>
        </div>
      </div>
      <div className="content container">
        <div className="content-filler">
        </div>
        <div className="actual content box">
          <div>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Message</label>
            <textarea rows="15" placeholder="Your message"></textarea>
            <button className="box">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ContactPage;