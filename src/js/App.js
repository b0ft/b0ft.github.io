import React from 'react'
import '../css/main.css'
import Navbar from './Navbar'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import About from './About'
import Secret from './Secret'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/secret" component={Secret} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
