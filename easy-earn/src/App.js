import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "../src/Components/Title/Title";
import Landing from "../src/Components/Landing/Landing";
import JoinGame from "../src/Components/JoinGame/JoinGame";
import Game from "../src/Components/Game/Game";
import { API, graphqlOperation } from "aws-amplify";
import { listPlayers, getGame } from "../src/graphql/queries";
import { createPlayer, createGame } from "../src/graphql/mutations";

function App() {
  let titleSection = null;
  let landingSection = null;
  let joinGameSection = null;
  let gameSection = null;
  const [showLanding, setshowLanding] = useState(true);
  const [showJoinGame, setshowJoinGame] = useState(false);
  const [showGame, setshowGame] = useState(false);
  const [playerName, setplayerName] = useState("");
  const [playerId, setplayerId] = useState("");
  const [isowner, setisowner] = useState(false);

  const [wn1, setwn1] = useState(0);
  const [wn2, setwn2] = useState(0);
  const [wn3, setwn3] = useState(0);

  const [gameID, setGameID] = useState(() => {
    return "";
  });

  useEffect(() => {
    setWinningNumbers();
  }, []);

  const setWinningNumbers = () => {
    setwn1(Math.floor(Math.random() * 10));
    setwn2(Math.floor(Math.random() * 10));
    setwn3(Math.floor(Math.random() * 10));
  };

  const [players, setPlayers] = useState([]);

  const onHostNewGame = async (p) => {
    const result = await API.graphql(
      graphqlOperation(createGame, {
        input: {
          createdBy: p,
          wn1: wn1,
          wn2: wn2,
          wn3: wn3,
        },
      })
    );

    setGameID((prevgameID) => (prevgameID = result.data.createGame.id));
    setplayerName(p);

    const result5 = await API.graphql(
      graphqlOperation(createPlayer, {
        input: {
          name: p,
          playerGameId: result.data.createGame.id,
          pn1: 0,
          pn2: 0,
          pn3: 0,
        },
      })
    );
    setplayerId(result5.data.createPlayer.id);
    setGameID(result.data.createGame.id);
    setisowner(true);
    setshowJoinGame(false);
    setshowLanding(false);
    setshowGame(true);

    console.log("qqqq" + result5.data.createPlayer.id);
  };

  const loadPlayersByGameID = async () => {
    const result4 = await API.graphql(graphqlOperation(listPlayers));
    const temp = result4.data.listPlayers.items.filter(
      (x) => x.gameID == gameID
    );

    setPlayers(temp);
  };

  const onJoinExistingGameClicked = (p) => {
    setplayerName(p);
    setshowLanding(false);
    setshowGame(false);
    setshowJoinGame(true);
  };

  const joinGame = async (id, playerName) => {
    const result6 = await API.graphql(graphqlOperation(getGame, { id: id }));

    const result5 = await API.graphql(
      graphqlOperation(createPlayer, {
        input: {
          name: playerName,
          playerGameId: id,
          pn1: 0,
          pn2: 0,
          pn3: 0,
        },
      })
    );

    setplayerId(result5.data.createPlayer.id);
    setGameID((prevgameID) => (prevgameID = id));
    setshowLanding(false);
    setshowGame(true);
    setshowJoinGame(false);
  };

  titleSection = (
    <div>
      <Title />
    </div>
  );

  if (showLanding) {
    landingSection = (
      <div>
        <Landing
          hostNewGameClicked={onHostNewGame}
          joinExistingGameClicked={onJoinExistingGameClicked}
        />
      </div>
    );
  }
  if (showJoinGame) {
    joinGameSection = (
      <div>
        <JoinGame joinGame={joinGame} playerName={playerName} />
      </div>
    );
  }

  if (showGame) {
    gameSection = (
      <div>
        <Game
          isowner={isowner}
          wn1={wn1}
          wn2={wn2}
          wn3={wn3}
          gameId={gameID}
          players={players}
          playerId={playerId}
        />
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
