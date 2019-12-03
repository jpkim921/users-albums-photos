import React from "react";
import UsersContainer from "./containers/UsersContainer";
import AlbumsContainer from "./containers/AlbumsContainer";
import PhotosContainer from "./containers/PhotosContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={UsersContainer} />
          <Route path="/albums/:userId" component={AlbumsContainer} />
          <Route
            path="/album/:userId/:albumId"
            component={PhotosContainer}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
