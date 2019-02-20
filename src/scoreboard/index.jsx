import React, { useContext } from "react";
import { GlobalContext } from "../context";
import { Header } from "./header";
import { Player } from "./player";
import { PlayerForm } from "./playerForm";
import { PlayerDetail } from "./playerDetail";

export const Scoreboard = _ => {
  const {
    state: {
      player: { players, selectedPlayerIndex }
    }
  } = useContext(GlobalContext);
  const selectedPlayer =
    selectedPlayerIndex !== -1 && players[selectedPlayerIndex];
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
      <PlayerDetail selectedPlayer={selectedPlayer} />
    </div>
  );
};
