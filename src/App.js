// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Dashboard from './dashboard'; // Create this component for the new page
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
