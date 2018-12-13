import React, { Fragment } from 'react'
import LogOutNavBar from './LogOutNavBar';
import TransactionList from './TransactionsList';

const Transaction = (props) => {
    return (
        <Fragment>
            <LogOutNavBar />
            <div className="container">
            <h2>Transaction Page!</h2>
            <TransactionList transactions={props.transactions} />
            </div>
        </Fragment>
    )
}

export default Transaction 