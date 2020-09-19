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

  return (
    <div className="joinGame-s0">
      <h3 className="joinGame-s1">Join Existing Game:</h3>
      <div className="joinGame-s2">
        <div className="joinGame-s5">
          <JoinGameItems
            playerName={props.playerName}
            joinGame={props.joinGame}
            games={games}
          ></JoinGameItems>
        </div>
      </div>
    </div>
  );
}

export default JoinGame;
