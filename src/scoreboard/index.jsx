import React, { useContext } from "react";
import { GlobalContext } from "../context";
import { Header } from "./header";
import { Player } from "./player";
import { PlayerForm } from "./playerForm";
import { ExpandedPlayer } from "./expandedPlayer";

export const Scoreboard = _ => {
  const {
    state: {
      player: { players, expandedPlayerId }
    }
  } = useContext(GlobalContext);
  const expandedPlayer = expandedPlayerId !== -1 && players[expandedPlayerId];
  const highScore = Math.max(...players.map(p => p.score));
  return (
    <div className="scoreboard">
      <Header />
      {players.map(player => (
        <div className="players">
          <Player key={player.id} player={player} highScore={highScore} />
        </div>
      ))}
      <PlayerForm />
      <ExpandedPlayer expandedPlayer={expandedPlayer} />
    </div>
  );
};
