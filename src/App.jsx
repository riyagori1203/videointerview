import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Views/Home'
import About from './Views/About'
import Login from './Views/Login'
import Register from './Views/Register'
import Dashboard from './Views/Dashboard'

import CustomNavbar from './Components/CustomNavbar'

function App() {
  return (
    <div>
      <Router>
        <CustomNavbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
