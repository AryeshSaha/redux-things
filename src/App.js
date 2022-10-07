import "./App.css";
import React from "react";
import { decNumber, incNumber, zNumber } from "./actions/Actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const myState = useSelector((state) => state.Task);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>

      <div className="quantity">
        <a
          className="quantity__minus"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          <span>-</span>
        </a>
        <div className="neutral">
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={myState}
          />
          <a
            className="quantity__neutral"
            title="Neutral"
            onClick={() => dispatch(zNumber())}
          >
            <span>N</span>
          </a>
        </div>
        <a
          className="quantity__plus"
          title="Increment"
          onClick={() => dispatch(incNumber(5))}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
}

export default App;
