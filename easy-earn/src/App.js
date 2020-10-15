import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "../src/Components/Title/Title";
import Landing from "../src/Components/Landing/Landing";
import JoinGame from "../src/Components/JoinGame/JoinGame";
import Game from "../src/Components/Game/Game";
import Winners from "./Components/EndGame/Winners";
import { API, graphqlOperation } from "aws-amplify";
import { listPlayers, getGame, listWinners } from "../src/graphql/queries";
import {
  createPlayer,
  createGame,
  deletePlayer,
  deleteGame,
} from "../src/graphql/mutations";
import { onCreateWinner } from "../src/graphql/subscriptions";
import EndGame from "../src/Components/EndGame/EndGame";

function App() {
  let titleSection = null;
  let landingSection = null;
  let joinGameSection = null;
  let gameSection = null;
  let winnersSection = null;
  const [showLanding, setshowLanding] = useState(true);
  const [showJoinGame, setshowJoinGame] = useState(false);
  const [showGame, setshowGame] = useState(false);
  const [showWinners, setshowWinners] = useState(false);
  const [playerName, setplayerName] = useState("");
  const [playerId, setplayerId] = useState("");
  const [winner, setWinner] = useState("");
  const [result, setResult] = useState("");
  const [winnerList, setwinnerList] = useState([]);
  const [isowner, setisowner] = useState(false);
  const [players, setPlayers] = useState([]);
  const [isThereWinner, setIsThereWinner] = useState(false);

  const [wn1, setwn1] = useState(0);
  const [wn2, setwn2] = useState(0);
  const [wn3, setwn3] = useState(0);

  // const [gameID, setGameID] = useState(() => {
  //   return "";
  // });

  const [gameID, setGameID] = useState("");

  useEffect(() => {
    setWinningNumbers();
    listenToCreateWinners();
  }, []);

  const setWinningNumbers = () => {
    setwn1(Math.floor(Math.random() * 10));
    setwn2(Math.floor(Math.random() * 10));
    setwn3(Math.floor(Math.random() * 10));
  };

  function deletePlayers() {
    console.log(players.length);
    players.map((p) => {
      deletePlayer2(p);
    });
  }

  const isThereWinner2 = (result) => {
    setIsThereWinner(result);
  };

  const deletePlayer2 = async (p) => {
    const result5 = await API.graphql(
      graphqlOperation(deletePlayer, {
        input: {
          id: p.id,
        },
      })
    );
  };

  const deleteWinner = async (w) => {
    const result5 = await API.graphql(
      graphqlOperation(deleteWinner, {
        input: {
          id: w.id,
        },
      })
    );
  };

  const deleteGameById = async (id) => {
    const result5 = await API.graphql(
      graphqlOperation(deleteGame, {
        input: {
          id: id,
        },
      })
    );
  };

  const deleteWinnersByGameId = async (id) => {
    const result4 = await API.graphql(graphqlOperation(listWinners));
    const temp = result4.data.listWinners.items.filter((x) => x.name == "bita");
    temp.map((x) => deleteWinner(x));
  };

  const showEndPage = async () => {
    setshowJoinGame(false);
    setshowLanding(false);
    setshowGame(false);
    setshowWinners(true);
  };

  const setWinnerListByGameId = async (newwinner) => {
    const result4 = await API.graphql(graphqlOperation(listWinners));
    const temp = result4.data.listWinners.items.filter(
      (x) => x.game.id == newwinner.game.id
    );
    winnerList.splice(0, winnerList.length);

    temp.map((item) => {
      if (winnerList.indexOf(item) === -1) winnerList.push(item);
    });
    setGameID(temp[0].game.id);
    setshowJoinGame(false);
    setshowLanding(false);
    setshowGame(false);
    setshowWinners(true);
    setwinnerList(winnerList);
  };

  const listenToCreateWinners = async () => {
    API.graphql(graphqlOperation(onCreateWinner)).subscribe({
      next: (winnerData) => {
        const newwinner = winnerData.value.data.onCreateWinner;
        console.log(newwinner.name);
        if(newwinner.name != "No Winner!") setIsThereWinner(true);
        setWinnerListByGameId(newwinner);
      },
    });
  };

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
    setshowWinners(false);
  };

  const deletePlayersByGameID = async (id) => {
    const result4 = await API.graphql(graphqlOperation(listPlayers));
    const temp = result4.data.listPlayers.items.filter((x) => x.game.id == id);
    players.splice(0, players.length);
    temp.map((p) => {
      players.push(p);
    });
    setPlayers(players);
    deletePlayers();
  };

  const onJoinExistingGameClicked = (p) => {
    setplayerName(p);
    setshowLanding(false);
    setshowGame(false);
    setshowJoinGame(true);
    setshowWinners(false);
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
    setshowWinners(false);
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
          showEndPage={showEndPage}
          isThereWinner={isThereWinner2}
        />
      </div>
    );
  }

  if (showWinners) {
    winnersSection = (
      <div>
        <EndGame
          result={result}
          isowner={isowner}
          players={players}
          gameId={gameID}
          winnerList={winnerList}
          isThereWinner={isThereWinner}
        ></EndGame>
      </div>
    );
  }

  return (
    <div>
      {titleSection}
      {landingSection}
      {joinGameSection}
      {gameSection}
      {winnersSection}
    </div>
  );
}

export default App;
