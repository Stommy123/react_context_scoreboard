import React, { useContext } from "react";
import { GlobalContext } from "../../context";

export const PlayerDetail = ({ selectedPlayer }) => {
  const {
    dispatch: {
      player: { closePlayerDetail }
    }
  } = useContext(GlobalContext);
  return selectedPlayer ? (
    <div className="player-detail">
      <a className="close-detail" onClick={closePlayerDetail}>
        ✖
      </a>
      <h3>{selectedPlayer.name}</h3>
      <ul>
        <li>
          <span>Score: </span>
          {selectedPlayer.score}
        </li>
        <li>
          <span>Created: </span>
          {selectedPlayer.created}
        </li>
        <li>
          <span>Updated: </span>
          {selectedPlayer.updated}
        </li>
      </ul>
    </div>
  ) : (
    <div className="player-detail">
      <p>Click on a player to see more details</p>
    </div>
  );
};

export default PlayerDetail;
