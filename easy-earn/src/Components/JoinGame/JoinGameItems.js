import React from "react";
import "../JoinGame/JoinGameItems.css";
import JoinGameItem from "../JoinGame/JoinGameItem";

const JoinGameItems = (props) =>
  props.games.map((m) => {
    return (
      <JoinGameItem
        joinGame={() => props.joinGame(m.id, props.playerName)}
        playerName={m.createdBy}
      />
    );
  });

export default JoinGameItems;
