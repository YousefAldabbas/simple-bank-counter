import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { actionCreators, State } from "./state";
function App() {
  const dispatch = useDispatch();
  const { depositMony, withdrawMony, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <div className="container">
        <h1>{amount}</h1>
        <div className="btn-group">
          <button
            onClick={() => {
              depositMony(100);
            }}
          >
            Deposit
          </button>
          <button
            onClick={() => {
              withdrawMony(100);
            }}
          >
            Withdraw
          </button>
          <button
            onClick={() => {
              bankrupt();
            }}
          >
            Bankrupt
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
