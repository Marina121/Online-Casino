import React, { useState } from "react";
import { Link } from "react-router-dom";
import Games from "./casinogame.json";
import "../AllGames/allGames.css";

function AllGames() {
  const [expandedGame, setExpandedGame] = useState(null);

  const toggleDescription = (gameName) => {
    setExpandedGame(gameName === expandedGame ? null : gameName);
  };

  return (
    <div>
      <h1 className="h1-games">All Games</h1>
      <div className="card-container-games">
        {Games.casinogame.map((casinogame) => {
          const { name, image, description } = casinogame;
          const isLongDescription = description.split(" ").length > 3;
          return (
            <div key={name} className="card-games">
              <h2 className="h2-games">{name}</h2>
              {/* Dodajte link na novu rutu */}
              <Link to={`/gameplay/${name}`}>
                <img
                  className="card-img"
                  src={image}
                  alt={name}
                  onClick={() => toggleDescription(name)}
                />
              </Link>
              <div className={`card-description-games ${expandedGame === name && "expanded"}`}>
                {isLongDescription && !expandedGame
                  ? `${description.split(" ").slice(0, 3).join(" ")}...`
                  : description}
              </div>
              {isLongDescription && (
                <button
                  className="btn-link-games"
                  onClick={() => toggleDescription(name)}
                >
                  {expandedGame === name ? "Prikaži manje" : "Prikaži više"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllGames;
