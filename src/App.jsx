import React from "react";
import { GlobalContextProvider } from "./context";
import { Scoreboard } from "./scoreboard";

const App = _ => (
  <GlobalContextProvider>
    <div className="scoreboard-wrapper">
      <Scoreboard />
    </div>
  </GlobalContextProvider>
);

export default App;
