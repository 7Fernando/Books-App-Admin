import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeProvider } from "./context/darkModeContext";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
       domain="dev-0h7i5plo.us.auth0.com"
       clientId="ZLlbxCeLpHsxoe4tMV6zUQwBJINkyzen"
       redirectUri={window.location.origin}
       audience="secreto"
       >
    <Provider store={store}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Provider>
  </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById("root")
);
