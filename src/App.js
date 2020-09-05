import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Skills from './Skills'
import Project from './Project'
import About from './About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
