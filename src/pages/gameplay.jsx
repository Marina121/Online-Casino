import React from "react";
import { useParams } from "react-router-dom";
import Games from "../components/AllGames/casinogame.json";


const gameplayImageStyle = {
    width: "400px",
    height: "400px",
    display: "block",
  margin: "auto",
  };

function Gameplay() {
  const { name } = useParams();

  const gameImage = Games.casinogame.find((casinogame) => casinogame.name === name)?.image;

  return (
    <div>
      <div className="app">
      <img src={gameImage} alt={name} style={gameplayImageStyle}  />
    </div>
    </div>
  );
}

export default Gameplay;
