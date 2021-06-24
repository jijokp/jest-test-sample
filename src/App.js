import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import listNames from './pages/listNames';
import todo from './pages/todo';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={listNames}/>
          <Route path="/todo" component={todo}/>
        </div>
      </Router>
    );
  }
}

export default App;