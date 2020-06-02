import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import configureStore from "./data/configureStore";
import "./normalize.css";
import "./index.css";
import App from "./App";
import colors from "theme/colors";

const { store, history } = configureStore();

ReactDOM.render(
  <ThemeProvider theme={colors}>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
