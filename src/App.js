import React, { Component, Fragment } from "react";
import {Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Account from "./components/Account";
import SignUpForm from "./components/SignUpForm"; 
import LoginForm from './components/LoginForm'; 
import Transaction from "./components/Transaction";

class App extends Component {
  render() {
    return (
		<Fragment>
			<Route path = "/" exact component={Home} />
			<Route path = "/accounts" component={Account} />
			<Route path = "/signup" component={SignUpForm} /> 
			<Route path = "/login" component={LoginForm} />
			<Route path="/transactions" component={Transaction} />
		</ Fragment>
    );
  }
}

export default App;
