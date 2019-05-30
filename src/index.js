import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Header() {
  let navigation = ["Home", "About", "Contact"];

  return <h1>My first react.js App</h1>;
}

function Body() {
  return <span>This is my firt react.js app.</span>;
}

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
