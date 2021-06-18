import React from 'react'
import './App.css';
import { Redirect, Route, Switch } from "react-router";
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import NewChannel from './components/NewChannel/NewChannel';
import AwesomeChannel from './components/AwesomeChannel/AwesomeChannel';
import NotFound from './components/NotFound/NotFound';
import MessagesState from './context/MessagesState';

const App = () => {
  return (
    <div>
      <MessagesState>
        <Switch>
          <Redirect exact from="/" to="/main" />
          <Route path="/login" component={Login}/>
          <Route path="/main" component={Main}/>
          <Route path="/newChannel" component={NewChannel}/>
          <Route exact path="/channel/:id?" component={AwesomeChannel}/>
          <Route path="*" component={NotFound}/>
          </Switch>
      </MessagesState>
    </div>
  );
};
export default App;
