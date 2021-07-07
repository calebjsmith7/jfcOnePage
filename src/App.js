import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
            <div>
                <Switch>
                  <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
