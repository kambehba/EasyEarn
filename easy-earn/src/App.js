import React, { useState } from "react";
import "./App.css";
import Title from "../src/Components/Title/Title";
import Landing from "../src/Components/Landing/Landing";
import JoinGame from "../src/Components/JoinGame/JoinGame";
import Game from "../src/Components/Game/Game";
import { API, graphqlOperation } from "aws-amplify";
import { createPlayer } from "../src/graphql/mutations";

function App() {
  let titleSection = null;
  let landingSection = null;
  let joinGameSection = null;
  let gameSection = null;
  const [showLanding, setshowLanding] = useState(true);
  const [showJoinGame, setshowJoinGame] = useState(false);
  const [showGame, setshowGame] = useState(false);
  const [playerName, setplayerName] = useState("");
  const [gameID, setGameID] = useState(() => {
    return "";
  });

  const onStartClicked = (p) => {
    setshowJoinGame(true);
    setshowLanding(false);
    setplayerName(p);
  };

  const onJoinGameClicked = async (id, playerName) => {
    const result2 = await API.graphql(
      graphqlOperation(createPlayer, {
        input: {
          name: playerName,
          gameID: id,
          pn1: 0,
          pn2: 0,
          pn3: 0,
        },
      })
    );

    setGameID((prevgameID) => (prevgameID = id));

    setshowGame(true);
    setshowJoinGame(false);
    setshowLanding(false);
  };

  titleSection = (
    <div>
      <Title />
    </div>
  );

  if (showLanding) {
    landingSection = (
      <div>
        <Landing startClicked={onStartClicked} />
      </div>
    );
  }
  if (showJoinGame) {
    joinGameSection = (
      <div>
        <JoinGame
          onJoinGameClicked={onJoinGameClicked}
          playerName={playerName}
        />
      </div>
    );
  }

  if (showGame) {
    gameSection = (
      <div>
        <Game gameID={gameID} />
      </div>
    );
  }

  return (
    <div>
      {titleSection}
      {landingSection}
      {joinGameSection}
      {gameSection}
    </div>
  );
}

export default App;
