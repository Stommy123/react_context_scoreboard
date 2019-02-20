import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context";

export const PlayerForm = _ => {
  const {
    dispatch: {
      player: { addPlayer }
    }
  } = useContext(GlobalContext);
  const [name, setName] = useState(String());
  const handleSubmit = e => {
    e.preventDefault();
    addPlayer({ name });
    setName(String());
  };
  return (
    <div className="add-player-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Player Name"
        />
        <input type="submit" value="Add Player" />
      </form>
    </div>
  );
};
