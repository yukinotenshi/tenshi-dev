import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div className="app container column">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    </div>
  );
}

export default App;