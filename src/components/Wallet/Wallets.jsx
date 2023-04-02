import React from "react";
import withdraw from "../../data/withdraw.png";
import deposit from "../../data/deposit-logo.png";
import btc from "../../data/btc.png";
import info from "../../data/info.png";
import classes from "./Wallet.module.scss";
import WalletAssets from "./WalletAssets/WalletAssets";
import NoTransaction from "./NoTransaction/NoTransaction";
import Transactions from "./Transactions/Transactions";
import Button from "../UI/Button/Button";

export default function Wallets() {
  return (
    <div className={classes.wallet__container}>
      <div className={classes.wallet__content}>
        <div className={classes.wallet}>
          <h3 className={classes.wallet__h3}>Wallet</h3>
          <div className={classes.wallet__box}>
            <div className={classes.wallet__balance}>
              <p className={classes.wallet__balanceP}>Total Balance</p>
              <h3 className={classes.wallet__balanceH3}>$200,000</h3>
              <div className={classes.wallet__btc}>
                <img className={classes.wallet__btcImg} src={btc} alt="BTC logo" />
                <p className={classes.wallet__btcAmt}>2.34 BTC</p>
              </div>
            </div>
            <div className={classes.wallet__btns}>
              <Button className="btn-withdraw">
                <img src={deposit} alt="withdraw sign" />
                Withdraw
              </Button>
              <Button className="btn-deposit">
                <img src={withdraw} alt="deposit sign" />
                Deposit
              </Button>
            </div>
          </div>
        </div>

        <div className={classes.assets}>
          <h3 className={classes.assets__h3}>Your Assets</h3>
          <div className={classes.asset__desc}>
            <span className={classes.asset__descName}>Name</span>
            <span className={classes.asset__descBalance}>Balance</span>
            <span className={classes.asset__descChange}>24h Change</span>
            <span className={classes.asset__descPrice}>Price</span>
          </div>
          <WalletAssets />
        </div>
      </div>

      <div className={classes.transaction__history}>
        <div className={classes.transaction__heading}>
          <h3>Transaction History</h3>
          <img src={info} alt="info circle" />
        </div>
        {/* render if there is no transactions */}
        <NoTransaction />

        {/* render if there are transactions */}
        <Transactions />
      </div>
    </div>
  );
}
