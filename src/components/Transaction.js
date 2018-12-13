import React, { Fragment } from 'react'
import LogOutNavBar from './LogOutNavBar';
import TransactionList from './TransactionsList';

const Transaction = () => {
    return (
        <Fragment>
            <LogOutNavBar />
            <h1>Transaction Page!</h1>
            <TransactionList />
        </Fragment>
    )
}

export default Transaction 