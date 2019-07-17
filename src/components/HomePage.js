import React from 'react';
import './HomePage.css';
import {Link} from "react-router-dom";


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoClicked: false
    }
  }
  animateLogo() {
    this.setState({logoClicked: !this.state.logoClicked});
    setTimeout(() => this.props.history.push("/menu"), 500);
  }
  render() {
    let logoClass = "box logo container";
    let contactClass = "contact container";
    if (this.state.logoClicked) {
      logoClass += " clicked";
      contactClass += " clicked";
    }

    return (
      <div>
        <div className={logoClass} onClick={() => this.animateLogo()}>
          TENSHI
        </div>
        <div className={contactClass}>
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
}

export default HomePage;
