import React from "react";

import * as BankActions from "../actions/BankActions";

import styles from "./styles/entryform.scss"

export default class EntryForm extends React.Component {

  handleSubmit() {
    event.preventDefault();
    let checkbox = document.querySelector(".checkbox").checked;

    let amount = parseFloat(this.refs.amount.value);
    const desc = this.refs.desc.value;
    const memo = this.refs.memo.value;

    if (!checkbox) amount = amount * (-1);

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
          <div>
            <label className="switch">Debit
              <input className="checkbox" type="checkbox" />
              <div className="slider"></div>
            </label>
          </div>

          <input type="submit" value="Add Entry" />
        </form>
      </div>
    );
  }
}
