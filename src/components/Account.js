import React, { Fragment } from 'react'
import AccountList from './AccountList'
import LogOutNavBar from './LogOutNavBar';

const Account = () => {
    return (
        <Fragment>
            <LogOutNavBar />
            <div className="container">
            <h2>Your Accounts:</h2>
            <AccountList />
            </div>
        </Fragment>
    )
}

export default Account 