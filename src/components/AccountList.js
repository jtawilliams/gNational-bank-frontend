import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const AccountList = () => {
    return (
        <Fragment>
            <div className="container">
                <span>We are having technical difficulties. Please proceed to your transactions page.</span>
                <Link to='/transactions'><button id="signUpFormButton" class="btn waves-effect waves-light" type="submit" name="action">Transactions
                        <i class="material-icons right">attach_money</i>
                        </button></Link>
            </div>
        </Fragment>
    )
}

export default AccountList 