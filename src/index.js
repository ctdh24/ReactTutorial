import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Header() {
  let navigation = ["Github", "LinkedIn", "Personal Site"];
  navigation = navigation.map(function(item) {
    return <li> {item} </li>;
  });
  return (
    <>
      <h1>My first react.js App</h1>
      {navigation}
    </>
  );
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
