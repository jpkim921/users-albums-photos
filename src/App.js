import React from "react";
import UsersContainer from "./containers/UsersContainer";
import AlbumsContainer from "./containers/AlbumsContainer";
import PhotosContainer from "./containers/PhotosContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={UsersContainer} />
          <Route path="/albums/:userId" component={AlbumsContainer} />
          <Route path="/albums/:userId/:albumTitle" component={PhotosContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
