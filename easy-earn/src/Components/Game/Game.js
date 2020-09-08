import React, { useState } from "react";
import "../Game/Game.css";

function Game(props) {
  const [pn1, setpn1] = useState("");
  const [pn2, setpn2] = useState("");
  const [pn3, setpn3] = useState("");

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
      alert(pn3);
      return;
    }
    if (!isNaN(pn1) && !isNaN(pn2) && !isNaN(pn3)) {
      setpn1("");
      setpn2("");
      setpn3("");
    }
  };
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
          <button className="btn btn-success">Lock Number</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
