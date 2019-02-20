import React, { useContext } from "react";
import { GlobalContext } from "../../../context";

export const Stats = _ => {
  const {
    state: {
      player: { players }
    }
  } = useContext(GlobalContext);
  const playerCount = players.length;
  const totalPoints = players.reduce((acc, player) => acc + player.score, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{playerCount}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};
