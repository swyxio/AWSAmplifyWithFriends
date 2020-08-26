import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <header className="App-header">
      <img
        src={"https://miro.medium.com/max/1024/1*JN6lRLbLyPQSKD5w3IR5Rw.jpeg"}
        className="App-logo"
        alt="logo"
      />
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
