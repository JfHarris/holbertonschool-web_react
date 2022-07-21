import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import uiReducer from "./reducers/uiReducer";
import { basicState } from "./reducers/uiReducer";
import { Map } from "immutable";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = createStore(uiReducer, Map(basicState), applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
