import React from "react";

import styles from './styles/registryentry.scss'

export default class RegistryEntry extends React.Component {
  render() {
    let entryClass = "";

    if (this.props.amount < 0) {
      entryClass = "entry debit"
    } else {
      entryClass = "entry credit"
    }

    return (
      <div className={entryClass}>
        <div className="date">{this.props.date}</div>
        <div className="description">{this.props.desc}</div>
        <div className="amount">${parseFloat(this.props.amount).toLocaleString()}</div>
      </div>
    );
  }
}
