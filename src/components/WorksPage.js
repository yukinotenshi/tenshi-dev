import React from 'react';
import './AboutPage.css';
import './WorksPage.css';
import {Link} from "react-router-dom";


function WorksPage() {
  return (
    <div className="page full-height container column">
      <div className="header container">
        <Link to="/menu" className="actual header box container">
          Back
        </Link>
        <div className="header-filler">
          <p>Works</p>
        </div>
      </div>
      <div className="content container">
        <div className="content-filler">
        </div>
        <div className="actual content box">
          <img alt="Rikka" src="https://media1.tenor.com/images/dd3e4f6d242ecad5738731da333a592c/tenor.gif?itemid=5315031" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo nulla. Imperdiet massa tincidunt nunc pulvinar sapien. Sit amet commodo nulla facilisi nullam vehicula. Vulputate ut pharetra sit amet aliquam. Lorem ipsum dolor sit amet consectetur adipiscing. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Enim facilisis gravida neque convallis a cras semper auctor neque. Eu feugiat pretium nibh ipsum consequat nisl. Feugiat sed lectus vestibulum mattis ullamcorper.
          </p>
        </div>
      </div>
      <div className="navigation container">
        <div className="content-filler"></div>
        <div className="nav-items container">
          <div className="nav-item prev box">
            &lt;&lt;
          </div>
          <div className="nav-item next box">
            &gt;&gt;
          </div>
        </div>
      </div>
    </div>
  );
}


export default WorksPage;