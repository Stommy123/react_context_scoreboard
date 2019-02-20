import React, { useContext } from "react";
import { GlobalContext } from "../../../context";

export const Counter = ({ id, score }) => {
  const {
    dispatch: {
      player: { updatePlayerScore }
    }
  } = useContext(GlobalContext);
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={_ => updatePlayerScore({ id, change: -1 })}
      >
        -
      </button>
      <div className="counter-score"> {score} </div>
      <button
        className="counter-action increment"
        onClick={_ => updatePlayerScore({ id, change: 1 })}
      >
        +
      </button>
    </div>
  );
};
