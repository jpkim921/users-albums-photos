import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import "./styles.css";
import "./photosDisplayStyle.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

function configureStore() {
  const enhancers = [
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];
  const composedEnhancers = compose(...enhancers);
  const store = createStore(rootReducer, composedEnhancers);

  return store;
}

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
