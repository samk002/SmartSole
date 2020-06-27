import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/dashboard'
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <hr />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <PublicRoute exact path="/login" restricted={true} component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
