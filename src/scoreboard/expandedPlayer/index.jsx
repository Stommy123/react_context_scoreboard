import React, { useContext } from "react";
import { GlobalContext } from "../../context";

export const ExpandedPlayer = ({ expandedPlayer }) => {
  const { name, score, created, updated } = expandedPlayer;
  const {
    dispatch: {
      player: { closePlayerDetail }
    }
  } = useContext(GlobalContext);
  return expandedPlayer ? (
    <div className="player-detail">
      <a className="close-detail" onClick={closePlayerDetail}>
        ✖
      </a>
      <h3>{name}</h3>
      <ul>
        <li>
          <span>Score: </span>
          {score}
        </li>
        <li>
          <span>Created: </span>
          {created}
        </li>
        <li>
          <span>Updated: </span>
          {updated}
        </li>
      </ul>
    </div>
  ) : (
    <div className="player-detail">
      <p>Click on a player to see more details</p>
    </div>
  );
};
