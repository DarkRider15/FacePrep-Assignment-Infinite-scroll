import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'foo' && password === 'bar') {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/home" /> : <Login handleLogin={handleLogin} />}
        </Route>
        <Route path="/home">
          {!loggedIn ? <Redirect to="/" /> : <Home handleLogout={handleLogout} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
