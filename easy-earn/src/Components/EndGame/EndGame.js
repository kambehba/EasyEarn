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
  let x1, x2, x3, x4, x5, x6, x7, x8, x9, x0, t1;
  let resultSection = null;
  let cleanUpSection = null;
  let winnerSection = null;
  let loserSection = null;

  const [isProcessed, setisProcessed] = useState(false);

  useEffect(() => {
    dothis();
  }, []);

  const dothis = () => {
    dothis2();
  };

  function dothis2() {
    x1 = document.getElementById("d1");
    x2 = document.getElementById("d2");
    x3 = document.getElementById("d3");
    x4 = document.getElementById("d4");
    x5 = document.getElementById("d5");
    x6 = document.getElementById("d6");
    x7 = document.getElementById("d7");
    x8 = document.getElementById("d8");
    x9 = document.getElementById("d9");
    x0 = document.getElementById("d0");
    t1 = document.getElementById("t1");

    x1.className = "endgame-s2 endgame-a1";
    x2.className = "endgame-s2 endgame-a1";
    x3.className = "endgame-s2 endgame-a1";
    x4.className = "endgame-s2 endgame-a1";
    x5.className = "endgame-s2 endgame-a1";
    x6.className = "endgame-s2 endgame-a1";
    x7.className = "endgame-s2 endgame-a1";
    x8.className = "endgame-s2 endgame-a1";
    x9.className = "endgame-s2 endgame-a1";
    x0.className = "endgame-s2 endgame-a1";
    document.getElementById("a3").play();
    //x.addEventListener("animationstart", myStartFunction);
    //x.addEventListener("animationiteration", myRepeatFunction);
    x1.addEventListener("animationend", myEndFunction);
    //x2.addEventListener("animationend", myEndFunction);
    //x3.addEventListener("animationend", myEndFunction);
  }

  const cleanUpGameData = async () => {
    deletePlayersByGameId();
  };

  if (isProcessed) {
    resultSection = (
      <div>
        <Winners winnerList={props.winnerList} />
      </div>
    );
  }

  if (props.isThereWinner && isProcessed) {
    winnerSection = (
      <div>
        <img src="https://media.giphy.com/media/ZBt5vcYY6kzG8cQ2V2/giphy.gif"></img>
      </div>
    );
  }
  if (!props.isThereWinner && isProcessed) {
    loserSection = (
      <div>
        <img src="https://media.giphy.com/media/tIFtLCKZEurywLm0gG/giphy.gif"></img>
      </div>
    );
  }

  if (props.isowner && isProcessed) {
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

  function myEndFunction() {
    document.getElementById("a1").pause();
    x1.className = "endgame-s7";
    x2.className = "endgame-s7";
    x3.className = "endgame-s7";
    x4.className = "endgame-s7";
    x5.className = "endgame-s7";
    x6.className = "endgame-s7";
    x7.className = "endgame-s7";
    x8.className = "endgame-s7";
    x9.className = "endgame-s7";
    x0.className = "endgame-s7";
    t1.className = "endgame-s7";
    setisProcessed(true);
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
    <div className="endgame-s0">
      <div>{winnerSection}</div>
      <div>{loserSection}</div>
      <div>{resultSection}</div>
      <div>{cleanUpSection}</div>
      <div>
        <audio loop id="a3">
          <source src="audio/Metal.wav" type="audio/mpeg"></source>
        </audio>
        <div id="t1">
          <h1 className="glow">Processing...</h1>
        </div>
        <div className="endgame-s1">
          <span id="d1" className="endgame-s2">
            <div className="endgame-s6">1</div>
          </span>
          <span id="d2" className="endgame-s2">
            {" "}
            <div className="endgame-s6">2</div>
          </span>
          <span id="d3" className="endgame-s2">
            {" "}
            <div className="endgame-s6">3</div>
          </span>
        </div>
        <div className="endgame-s1">
          <span id="d4" className="endgame-s2">
            <div className="endgame-s6">4</div>
          </span>
          <span id="d5" className="endgame-s2">
            {" "}
            <div className="endgame-s6">5</div>
          </span>
          <span id="d6" className="endgame-s2">
            {" "}
            <div className="endgame-s6">6</div>
          </span>
        </div>
        <div className="endgame-s1">
          <span id="d7" className="endgame-s2">
            <div className="endgame-s6">7</div>
          </span>
          <span id="d8" className="endgame-s2">
            {" "}
            <div className="endgame-s6">8</div>
          </span>
          <span id="d9" className="endgame-s2">
            {" "}
            <div className="endgame-s6">9</div>
          </span>
        </div>
        <div className="endgame-s1">
          <span id="d0" className="endgame-s2">
            {" "}
            <div className="endgame-s6">0</div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default EndGame;
