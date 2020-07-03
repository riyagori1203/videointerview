import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Views/Home'
import About from './Views/About'

function App() {
  return (
    <div>
      <Router>
        <h1>Test Nav</h1>
        <hr/>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
