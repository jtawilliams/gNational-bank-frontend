import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const AccountList = () => {
    return (
        <Fragment>
            <span>This will be the account list!</span>
            <Link to="/transactions"><button>Take me to transactions!</button></Link>
        </Fragment>
    )
}

export default AccountList 