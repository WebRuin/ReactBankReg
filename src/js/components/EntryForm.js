import React from "react";

import * as BankActions from "../actions/BankActions";

import styles from "./styles/entryform.scss"

export default class EntryForm extends React.Component {

  handleSubmit() {
    event.preventDefault();

    const amount = parseFloat(this.refs.amount.value);
    const desc = this.refs.desc.value;
    const memo = this.refs.memo.value;

    BankActions.addEntry(amount, desc, memo);

    this.refs.form.reset()
  }

  render() {
    return (
      <div className="entryForm">
        <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="formElement">
            <lable htmlFor="amount">Amount</lable>
            <input ref="amount" idName="amount" />
          </div>
          <div className="formElement">
            <lable htmlFor="desc">Description</lable>
            <input ref="desc" idName="desc" />
          </div>
          <div className="formElement">
            <lable htmlFor="memo">Memo</lable>
            <textarea ref="memo" idName="memo" />
          </div>

          <input type="submit" value="Add Entry" />
        </form>
      </div>
    );
  }
}
