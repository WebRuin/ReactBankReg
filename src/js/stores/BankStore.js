import uuid from "uuid/v4";
import { EventEmitter } from "events";
import axios from "axios";

import dispatcher from "../dispatcher";

class BankStore extends EventEmitter {
  constructor() {
    super()
    this.register = [];
  }

  fetchRegister() {
    let th = this
    this.serverRequest =
      axios.get('http://localhost:3000/register')
        .then(function(result) {
          result.data.map((entry) => {
            th.fetchRegistryFromDB(entry)
          })
        })
  }

  fetchRegistryFromDB(entry) {
    this.register.unshift(entry)
    this.emit("change")
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

    const entry = {
      amount,
      date,
      desc,
      id,
      memo
    };

    axios.post('http://localhost:3000/register', entry)

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
      case "FETCH_REGISTER": {
        this.fetchRegister();
        break;
      }
    }
  }

}

const bankStore = new BankStore;
dispatcher.register(bankStore.handleActions.bind(bankStore));

export default bankStore;
