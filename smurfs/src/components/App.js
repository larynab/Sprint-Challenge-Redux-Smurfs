import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Link to='/smurflist'>Smurf List</Link>
        <Route path='/smurflist' component={SmurfList} />
      </div>
      </Router>
    );
  }
}

export default App;
