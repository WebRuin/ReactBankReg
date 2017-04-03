import dispatcher from "../dispatcher";

export function addEntry(amount, desc, memo) {
  dispatcher.dispatch({
    type: "ADD_ENTRY",
    amount,
    desc,
    memo
  });
}
