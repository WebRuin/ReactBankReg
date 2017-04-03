import uuid from "uuid/v4"
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class BankStore extends EventEmitter {
  constructor() {
    super()
    this.register = [
      {
        amount: -20.00,
        date: 394512764,
        desc: "Cash WithDraw",
        id: 394512764,
        memo: ""
      },
      {
        amount: 1000000.00,
        date: 113464613,
        desc: "Opened Million Dollar Account",
        id: 113464613,
        memo: ""

      },
    ];
  }

  addEntry(amount, desc, memo) {
    const id = uuid();
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!

    var yyyy = date.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    var date = dd+'/'+mm+'/'+yyyy;

    this.register.unshift({
      amount,
      date,
      desc,
      id,
      memo
    });

    this.emit("change");
  }

  getAll() {
    return this.register;
  }

  handleActions(action) {
    switch(action.type) {
      case "ADD_ENTRY": {
        this.addEntry(action.amount, action.desc, action.memo);
        break;
      }
    }
  }

}

const bankStore = new BankStore;
dispatcher.register(bankStore.handleActions.bind(bankStore));

export default bankStore;
