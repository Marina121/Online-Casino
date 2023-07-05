import React from "react";
import { useParams } from "react-router-dom";
import Games from "../components/AllGames/casinogame.json";
import "../App.css";

const gameplayImageStyle = {
  width: "400px",
  height: "400px",
  display: "block",
  margin: "auto",
};

function Gameplay() {
  const { name } = useParams();

  const game = Games.casinogame.find((casinogame) => casinogame.name === name);

  if (!game) {
    return <div>Game not found.</div>;
  }

  const gameImage = game.image;

  return (
    <div>
      <div className="app">
        <img src={gameImage} alt={name} style={gameplayImageStyle} />
      </div>
      <div className="game-info"> 
        <h2 className="game-name">{game.name}</h2> 
        <p className="game-description">{game.description}</p> 
      </div>
    </div>
  );
}

export default Gameplay;
