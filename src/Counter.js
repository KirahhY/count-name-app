import React from "react";

export default function Counter({ countProps, isErrorProps, onClickPlus, onClickMinus }) {
  return (
    <div className="App">
      Compteur : {countProps}
      <div>

        <button onClick={onClickMinus}>-</button>
        <button onClick={onClickPlus}>+</button>

        {isErrorProps ? (
          <div className="App-error">NON</div>
        ) : null}
      </div>
    </div>
  );
};