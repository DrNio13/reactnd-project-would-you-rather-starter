import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import { handleUsersInitialData } from './actions/users';
import { NoMatch } from './components/NoMatch';

function App(props) {
  useEffect(() => {
    props.dispatch(handleUsersInitialData());
  }, [props])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default connect()(App)
