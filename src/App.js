import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        <AmplifySignOut />
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default withAuthenticator(() => (
  <div className="App">
    <App />
  </div>
));
