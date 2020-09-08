import React, { useState } from "react";
import "../JoinGame/JoinGameItem.css";

function JoinGameItem(props) {
  return (
    <div className="joinGameItem-s0">
      <span>
        <button
          onClick={props.joinGameClicked}
          className="btn- btn-success joinGameItem-s2"
        >
          Join
        </button>
      </span>
      <h4 className="joinGameItem-s1">
        <h4>created by:</h4> {props.playerName}
      </h4>
    </div>
  );
}

export default JoinGameItem;
