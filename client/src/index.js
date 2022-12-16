import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/tailwind.css";
import "./styles/index.css";

import store from "./config/store";

import App from "./App";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
