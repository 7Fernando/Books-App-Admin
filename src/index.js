import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeProvider } from "./context/darkModeContext";
import store from "./redux/store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
