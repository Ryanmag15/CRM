import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router";
import { Provider } from "react-redux";
import "./scss/app.scss";
import { authStore } from "./redux/stores/authStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={authStore}>
      <Router />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
