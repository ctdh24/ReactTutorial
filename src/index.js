import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "./styles.css";

function Header() {
  let navigation = ["Home", "About", "Contact"];
  navigation = navigation.map(function(item) {
    return (
      <li>
        <Link to={item}>{item}</Link>
      </li>
    );
  });
  return (
    <>
      <h1>My first react.js App</h1>
      {navigation}
    </>
  );
}

function Home() {
  return <span>this is the homepage</span>;
}
function About() {
  return <span>this is the aboutpage</span>;
}
function Contact() {
  return <span>this is the contactpage</span>;
}

function Body() {
  return (
    <Router>
      <>
        <Route path={"/home"} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </>
    </Router>
  );
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
