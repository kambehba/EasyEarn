import React, { useState, useEffect } from "react";
import "../JoinGame/JoinGame.css";
import JoinGameItems from "../JoinGame/JoinGameItems";
import { API, graphqlOperation } from "aws-amplify";
import { createGame, createPlayer } from "../../graphql/mutations";
import { getPlayer, listGames } from "../../graphql/queries";
import { onCreateGame } from "../../graphql/subscriptions";

function JoinGame(props) {
  useEffect(() => {
    loadGames();
    API.graphql(graphqlOperation(onCreateGame)).subscribe({
      next: (gameData) => {
        const newGame = gameData.value.data.onCreateGame;
        const preGames = games;
        const updatedGames = [...preGames, newGame];
        setGames(updatedGames);
        loadGames();
      },
    });
  }, []);

  const loadGames = async () => {
    const result4 = await API.graphql(graphqlOperation(listGames));
    setGames(result4.data.listGames.items);
  };

  const [games, setGames] = useState([]);
  const [game, setGame] = useState({
    createdBy: "",
    wn1: 0,
    wn2: 0,
    wn3: 0,
  });

  const addNewGame = async (playerName) => {
    const result = await API.graphql(
      graphqlOperation(createGame, {
        input: {
          createdBy: playerName,
          wn1: 0,
          wn2: 22,
        },
      })
    );

    const result3 = await API.graphql(graphqlOperation(listGames));
    setGames(result3.data.listGames.items);
  };

  return (
    <div className="joinGame-s0">
      <h3 className="joinGame-s1">Join Existing Game:</h3>
      <div className="joinGame-s2">
        <div className="joinGame-s5">
          <JoinGameItems
            playerName={props.playerName}
            onJoinGameClicked={props.onJoinGameClicked}
            games={games}
          ></JoinGameItems>
        </div>
      </div>

      <div className="joinGame-s3">
        <h3 className="joinGame-s4">Or Start New Game:</h3>

        <button
          className="btn btn-danger joinGame-s6"
          onClick={() => addNewGame(props.playerName)}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default JoinGame;
