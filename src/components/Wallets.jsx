import React from 'react'
import withdraw from '../data/withdraw.png'
import deposit from '../data/deposit-logo.png'
import btc from '../data/btc.png'
import info from '../data/info.png'
import "./Wallet.css"
import WalletAssets from './WalletAssets'
import NoTransaction from './NoTransaction'
import Transactions from './Transactions'

export default function Wallets() {
  return (
    <div className='wallet-container'>
      <div className="wallet-content">
        <div className="wallet">
          <h3 className='wallet-h3'>Wallet</h3>
          <div className="wallet-box">
            <div className="wallet-balance">
              <p className='wallet-balance-p'>Total Balance</p>
              <h3 className='wallet-balance-h3'>$200,000</h3>
              <div className="wallet-btc">
                <img className='wallet-btc-img' src={btc} alt="BTC logo" />
                <p className='wallet-btc-amt'>2.34 BTC</p>
              </div>
            </div>
            <div className="wallet-btns">
              <button className='withdraw-btn'><img src={deposit} alt="withdraw sign" />Withdraw</button>
              <button className='deposit-btn'><img src={withdraw} alt="deposit sign" />Deposit</button>
            </div>
          </div>
        </div>

        <div className="assets">
          <h3 className='asset-h3'>Your Assets</h3>
          <div className="asset-desc">
            <span className='asset-name-desc'>Name</span>
            <span className='asset-balance-desc'>Balance</span>
            <span className='asset-change-desc'>24h Change</span>
            <span className='asset-price-desc'>Price</span>
          </div>
          <WalletAssets />
        </div>
      </div>

      <div className="transaction-history">
        <div className="transaction-heading">
          <h3>Transaction History</h3>
          <img src={info} alt="info circle" />
        </div>
        {/* render if there is no transactions */}
        <NoTransaction />

        {/* render if there are transactions */}
        <Transactions />
      </div>
    </div>
  )
}
