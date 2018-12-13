import React, { Fragment } from 'react'
import AccountList from './AccountList'
import LogOutNavBar from './LogOutNavBar';

const Account = () => {
    return (
        <Fragment>
            <LogOutNavBar />
            <h1>Accounts Page!</h1>
            <AccountList />
        </Fragment>
    )
}

export default Account 