import React, { Component, Fragment } from "react";
import {Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Account from "./components/Account";
import SignUpForm from "./components/SignUpForm"; 
import LoginForm from './components/LoginForm'; 
import Transaction from "./components/Transaction";

const transactionsAPI = "https://galvanize-bank.herokuapp.com/transactions"

class App extends Component {
	constructor() {
		super()
		this.state = {
			transactions: [],
		}
	}

	async componentDidMount() {
		this.loadTransactions()
	}

	loadTransactions = () => {
		fetch(transactionsAPI)
		.then(transactions => transactions.json())
		.then(transactions => this.setState({transactions}))
	}

	// handleInput = (event) => {
	// 	const { value, name } = event.target
	// 	this.setState({
	// 		[name]: value
	// 	})
	// }

  render() {
    return (
		<Fragment>
			<Route path = "/" exact component={Home} />
			<Route path = "/accounts" component={Account} />
			<Route path = "/signup" component={SignUpForm} /> 
			<Route path = "/login" component={LoginForm} />
			<Route path="/transactions" render={() => (<Transaction transactions={this.state.transactions}/>)} />
		</ Fragment>
    );
  }
}

export default App;
