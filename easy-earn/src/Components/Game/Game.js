import React, { useState, useEffect } from "react";
import "../Game/Game.css";
import { API, graphqlOperation } from "aws-amplify";
import { listPlayers, getGame } from "../../graphql/queries";
import {
  updatePlayer,
  deletePlayer,
  deleteGame,
} from "../../graphql/mutations";
import { onCreatePlayer, onUpdatePlayer } from "../../graphql/subscriptions";

function Game(props) {
  let spinSection = null;
  let winnuingNumbers = [];
  let playerNumbers = [];
  let winners = [];

  const [pn1, setpn1] = useState("");
  const [pn2, setpn2] = useState("");
  const [pn3, setpn3] = useState("");

  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [game, setGame] = useState({});

  useEffect(() => {
    loadPlayersByGameID();
    listenToCreatePlayer();
    listenToUpdatePlayer();
  }, []);

  const loadPlayersByGameID = async () => {
    const result4 = await API.graphql(graphqlOperation(listPlayers));
    const temp = result4.data.listPlayers.items.filter(
      (x) => x.game.id == props.gameId
    );
    setPlayers(temp);
  };

  const pickNumber = (n) => {
    if (pn1 === "") {
      setpn1(n);
      return;
    }
    if (pn2 === "") {
      setpn2(n);
      return;
    }
    if (pn3 === "") {
      setpn3((prevpn3) => (prevpn3 = n));
      return;
    }
    if (!isNaN(pn1) && !isNaN(pn2) && !isNaN(pn3)) {
      setpn1("");
      setpn2("");
      setpn3("");
    }
  };

  const ProcessGameResult = () => {
    players.map((item) => {
      setWinningNumbers();
      setPlayerNumbers(item);

      console.log(winnuingNumbers);
      console.log(playerNumbers);

      let hasPlayerLost = false;
      for (var i = 0; i < winnuingNumbers.length; i++) {
        if (winnuingNumbers[i] !== playerNumbers[i]) {
          hasPlayerLost = true;
          continue;
        }
      }

      if (!hasPlayerLost) {
        winners.push(item.name);
      }
    });
    winners.map((w) => alert(w));

    players.map((x) => {
      removePlayer(x);
    });
    removeGame(props.gameId);
  };

  const lockNumbers = async () => {
    loadPlayersByGameID();
    const result = players.filter((x) => x.id == props.playerId);

    player.pn1 = pn1;
    player.pn2 = pn2;
    player.pn3 = pn3;
    player.playerGameId = result[0].playerGameId;
    player.name = result[0].name;
    player.id = result[0].id;

    setPlayer(player);
    const result5 = await API.graphql(
      graphqlOperation(updatePlayer, {
        input: {
          id: result[0].id,
          name: result[0].name,
          pn1: pn1,
          pn2: pn2,
          pn3: pn3,
          playerGameId: result[0].playerGameId,
        },
      })
    );
  };

  if (props.isowner) {
    spinSection = (
      <div>
        <button
          onClick={() => ProcessGameResult()}
          className="btn btn-danger game-12"
        >
          <h4>Start the Game</h4>
        </button>
      </div>
    );
  }

  return (
    <div className="game-s0">
      <div className="game-s6">
        <div className="game-s7">Pick 3 NUMBERS</div>
        <div className="game-s1">
          <div className="game-s2">
            <button
              onClick={() => pickNumber(1)}
              className="btn btn-danger game-s3"
            >
              1
            </button>
            <button
              onClick={() => pickNumber(2)}
              className="btn btn-danger game-s3"
            >
              2
            </button>
            <button
              onClick={() => pickNumber(3)}
              className="btn btn-danger game-s3"
            >
              3
            </button>
          </div>

          <div className="game-s2">
            <button
              onClick={() => pickNumber(4)}
              className="btn btn-danger game-s3"
            >
              4
            </button>
            <button
              onClick={() => pickNumber(5)}
              className="btn btn-danger game-s3"
            >
              5
            </button>
            <button
              onClick={() => pickNumber(6)}
              className="btn btn-danger game-s3"
            >
              6
            </button>
          </div>

          <div className="game-s2">
            <button
              onClick={() => pickNumber(7)}
              className="btn btn-danger game-s3"
            >
              7
            </button>
            <button
              onClick={() => pickNumber(8)}
              className="btn btn-danger game-s3"
            >
              8
            </button>
            <button
              onClick={() => pickNumber(9)}
              className="btn btn-danger game-s3"
            >
              9
            </button>
          </div>
          <div className="game-s2">
            <button
              onClick={() => pickNumber(0)}
              className="btn btn-danger game-s3"
            >
              0
            </button>
          </div>
        </div>
        <div className="game-s4">
          <h1 className="game-s5">{pn1}</h1>
          <h1 className="game-s5">{pn2}</h1>
          <h1 className="game-s5">{pn3}</h1>
        </div>
        <div className="game-s8">
          <button onClick={lockNumbers} className="btn btn-success">
            Lock Your Number
          </button>
        </div>
      </div>

      <div className="game-s9">
        <div className="game-10">Players in This Room:</div>

        {players.map((x) => (
          <div className="game-11" key={x.id}>
            {x.name} --- {x.pn1}.{x.pn2}.{x.pn3}
          </div>
        ))}
      </div>
      <div>{spinSection}</div>
    </div>
  );

  function setWinningNumbers() {
    winnuingNumbers = winnuingNumbers.splice(0, winnuingNumbers.length);
    winnuingNumbers.push(props.wn1);
    winnuingNumbers.push(props.wn2);
    winnuingNumbers.push(props.wn3);
    winnuingNumbers.sort();
  }

  function setPlayerNumbers(p) {
    playerNumbers = playerNumbers.splice(0, playerNumbers.length);
    playerNumbers.push(p.pn1);
    playerNumbers.push(p.pn2);
    playerNumbers.push(p.pn3);
    playerNumbers.sort();
  }

  function listenToCreatePlayer() {
    API.graphql(graphqlOperation(onCreatePlayer)).subscribe({
      next: (playerData) => {
        const newPlayer = playerData.value.data.onCreatePlayer;

        setPlayer(newPlayer);
        const prevPlayers = players;
        const updatedPlayers = [...prevPlayers, newPlayer];
        setPlayers(updatedPlayers);
        loadPlayersByGameID();
      },
    });
  }

  function listenToUpdatePlayer() {
    API.graphql(graphqlOperation(onUpdatePlayer)).subscribe({
      next: (playerData) => {
        const updatedPlayer = playerData.value.data.onUpdatePlayer;
        //console.log(updatedPlayer);

        //setPlayer(updatedPlayer);
        //const prevPlayers = players;
        //const updatedPlayers = [...prevPlayers, updatedPlayer];
        //setPlayers(updatedPlayers);
        loadPlayersByGameID();
      },
    });
  }

  function setGameByID() {
    API.graphql(graphqlOperation(getGame)).subscribe({
      next: (gameData) => {
        setGame(gameData.value.data.getGame);
      },
    });
  }

  async function removePlayer(p) {
    const result5 = await API.graphql(
      graphqlOperation(deletePlayer, {
        input: {
          id: p.id,
        },
      })
    );
  }

  async function removeGame(g) {
    const result5 = await API.graphql(
      graphqlOperation(deleteGame, {
        input: {
          id: g,
        },
      })
    );
  }
}

export default Game;
