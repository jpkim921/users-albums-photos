import React, { Component } from "react";
import UsersContainer from "./containers/UsersContainer";
import AlbumsContainer from "./containers/AlbumsContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={UsersContainer} />
          <Route path="/albums/:userId" component={AlbumsContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
