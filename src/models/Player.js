import { data } from "../data";

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

export const player = {
  initialState: {
    players: data,
    expandedPlayerId: -1
  },
  reducers: {
    addPlayer: (state, { name }) => {
      const newPlayer = {
        id: state.players.length,
        name,
        score: 0,
        created: `${month}/${day}/${year}`
      };
      const addPlayerList = [...state.players, newPlayer];
      return {
        ...state,
        players: addPlayerList
      };
    },
    removePlayer: (state, { id }) => {
      const removePlayerList = state.players.filter(player => player.id !== id);
      return {
        ...state,
        players: removePlayerList
      };
    },
    updatePlayerScore: (state, { id, change }) => {
      const updatedPlayerList = state.players.map(player =>
        player.id === id
          ? {
              ...player,
              score: player.score + change,
              updated: `${month}/${day}/${year}`
            }
          : player
      );
      return {
        ...state,
        players: updatedPlayerList
      };
    },
    showPlayerDetail: (state, { id }) => ({
      ...state,
      expandedPlayerId: id
    }),
    closePlayerDetail: state => ({
      ...state,
      expandedPlayerId: -1
    })
  }
};
