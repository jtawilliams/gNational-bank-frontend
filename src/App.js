import React, { Component, Fragment } from "react";
import {Route} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Account from "./components/Account";

class App extends Component {
  render() {
    return (
		<Fragment>
			<NavBar />
			<Route path = "/" exact component={Home} />
			<Route path = "/accounts" component={Account} />
		</ Fragment>
    );
  }
}

export default App;
