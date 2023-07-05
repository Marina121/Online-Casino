
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Games from "./casinogame.json";
import "../AllGames/allGames.css";

function AllGames() {
  const [expandedGame, setExpandedGame] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const navigate = useNavigate();

  const toggleDescription = (gameName) => {
    setExpandedGame((prevGame) => (gameName === prevGame ? null : gameName));
  };

  const handleImageClick = (gameName) => {
    setSelectedGame(gameName);
    console.log("Navigating to:", `/gameplay/${gameName}`);
navigate(`/gameplay/${gameName}`);

  };

  return (
    <div className="app-game">
      <div className="grid-main-game">
        <div className="home-slot-game">
          <div className="page-slot-game">
            <div className="grid-header-game" align="center">
              <h2 className="sm-head headline text-center with-button">
                <div className="headline-border-game">
                  ALLE SPIELE
                </div>
              </h2>
              <div className="default-scrollbar-game">
                <div className="grid-game">
                  <div className="gallery-img-game">
                    <div className="card-container-game">
                      {Games.casinogame.map((casinogame) => {
                        const { name, image } = casinogame;
                        const isExpanded = name === expandedGame;
                        const isSelected = name === selectedGame;
                        return (
                          <div key={name}>
                            <img
                              className={`card-image-game ${isSelected ? "selected" : ""}`}
                              src={image}
                              alt={name}
                              onClick={() => handleImageClick(name)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllGames;
