import React from 'react'
import { Link } from 'react-router-dom'
import { transactionItems } from '../data/data'

export default function Transactions() {

    const transactionList = (props) =>{
        return(
            <div className="transaction">
                <img src={props.img} alt="transfer" style={{ backgroundColor: props.received ? "#18bb0c" : "#e61b00" }}/>
                <div className="transaction-detail">
                    <p className='transaction-amt'>{props.amount}</p>
                    <p className='transaction-time'>{props.time}</p>
                </div>
            </div>
        )
    }

  return (
    <div className='transactions-container'>
        <div className="transactions">
            {transactionItems.map(transactionList)}
        </div>
        <Link className='see-cryptos-link'>See all Transaction</Link>
    </div>
  )
}
