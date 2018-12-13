import React, { Fragment } from 'react'

const TransactionsList = (props) => {
    let transactionList = props.transactions.map(transaction => {
        return (
            <Fragment>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p>{transaction.title}</p>
                    </li>
                </ul>
            </Fragment>
        )
    })
    return (
        <Fragment>
            { transactionList }
        </Fragment>
    )
}

export default TransactionsList 