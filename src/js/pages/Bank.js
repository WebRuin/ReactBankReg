import React from "react";

import * as BankActions from "../actions/BankActions";
import BankStore from "../stores/BankStore";

import styles from "./styles/bank.scss";

import RegistryEntry from "../components/RegistryEntry";
import EntryForm from "../components/EntryForm";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getRegister = this.getRegister.bind(this);
    this.state = {
      register: BankStore.getAll(),
    };
  }

  componentWillMount() {
    BankStore.on("change", this.getRegister);
  }

  componentWillUnmount() {
    BankStore.removeListener("change", this.getRegister);
  }

  getRegister() {
    this.setState({
      register: BankStore.getAll(),
    });
  }

  reloadTodos() {
    BankActions.reloadTodos();
  }

  render() {
    const { register } = this.state;
    let registerTotal = 0;

    const BankRegisteries = register.map((entry) => {
      registerTotal += entry.amount
      return <RegistryEntry key={entry.id} {...entry}/>;
    });

    return (
      <div className="bankWrapper">
        <EntryForm />

        <div className="register">
          <div className="bankTotalLine">
            <div>Avalible Balance</div>
            <div className="total">${registerTotal}</div>
          </div>
          {BankRegisteries}
        </div>
      </div>
    );
  }
}
