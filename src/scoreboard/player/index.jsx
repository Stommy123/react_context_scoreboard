import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { Icon } from "./icon";
import { Counter } from "./counter";

export const Player = ({ player: { id, name, score }, highScore }) => {
  const {
    dispatch: {
      player: { showPlayerDetail, removePlayer }
    }
  } = useContext(GlobalContext);
  return (
    <div className="player">
      <div className="player-name" onClick={_ => showPlayerDetail({ id })}>
        <a className="remove-player" onClick={_ => removePlayer({ id })}>
          ✖
        </a>
        <Icon highScore={highScore} score={score} />
        {name}
      </div>
      <div className="player-score">
        <Counter id={id} score={score} />
      </div>
    </div>
  );
};
