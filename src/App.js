import React from "react";
import { Router } from "@reach/router";

import Home from "./components/Home";
import Game from "./components/Game";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Game path="/game" />
    </Router>
  );
};

export default App;
