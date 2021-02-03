import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Form from './Components/Form/Form.js';
import Login from './Components/Login.js'
import Dashboard from './Components/Dashboard/Dashboard.js';
import New from './Components/Dashboard/New.js';
import { dom } from '@fortawesome/fontawesome-svg-core';




function App() {
  return (
    <Router>
    <Switch>
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Login} />
      <Route path="/login" component={Login} />     
      <Route path="/signup" component={Form} />
      <Route path="/dashboard" component={Dashboard} /> 
      <Route path="/new" component={New} /> 
     

      </div>
    </Switch>
    </Router>
  );
}

export default App;