import React from "react";

import styles from "./styles/header.scss";

export default class Header extends React.Component {
  render() {

    return (
      <div className="bankWrapper">
        <EntryForm />

        <div className="register">
          <div className="bankTotalLine">
            <div>Available Balance</div>
            <div className="total">${registerTotal.toLocaleString()}</div>
          </div>
          {BankRegisteries}
        </div>
      </div>
    );
  }
}
