import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import "./EndGame.css";
import { listPlayers, listWinners } from "../../graphql/queries";
import {
  deletePlayer,
  deleteGame,
  deleteWinner,
} from "../../graphql/mutations";

import Winners from "../EndGame/Winners";

function EndGame(props) {
  let cleanUpSection = null;

  const cleanUpGameData = async () => {
    deletePlayersByGameId();
  };

  if (props.isowner) {
    cleanUpSection = (
      <div>
        <button
          onClick={() => cleanUpGameData()}
          className="btn btn-danger endgame-s1"
        >
          <h4>Delete the Game</h4>
        </button>
      </div>
    );
  }

  const deletePlayersByGameId = async () => {
    const result4 = await API.graphql(graphqlOperation(listPlayers));
    const temp = result4.data.listPlayers.items.filter(
      (x) => x.playerGameId == props.gameID
    );
    temp.map((x) => deletePlayer2(x));
    deleteWinnersByGameId();
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

  const deleteGameById = async () => {
    const result5 = await API.graphql(
      graphqlOperation(deleteGame, {
        input: {
          id: props.gameId,
        },
      })
    );
  };

  const deleteWinnersByGameId = async () => {
    const result4 = await API.graphql(graphqlOperation(listWinners));
    const temp = result4.data.listWinners.items.filter(
      (x) => x.winnerGameId == props.gameID
    );
    temp.map((x) => deleteWinner2(x));
    deleteGameById();
  };

  const deleteWinner2 = async (w) => {
    const result5 = await API.graphql(
      graphqlOperation(deleteWinner, {
        input: {
          id: w.id,
        },
      })
    );
  };

  return (
    <div>
      <img
        className="endgame-s3"
        src="images/gear.png"
        alt="Alternative Text"
      />
      {props.endGameResult}
      <div>
        <Winners winnerList={props.winnerList} />
      </div>
      <div>{cleanUpSection}</div>
    </div>
  );
}

export default EndGame;
