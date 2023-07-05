import React, { useState } from "react";
import ListMenu from "../components/ListMenu/listMenu"
import "../App.css";


import Games from "../games.json";
import Slideshow from "../components/Slideshow/slideshow";
import Slider from "react-slick";

function Index() {
	const [expandedGame, setExpandedGame] = useState(null);
	
	return (
	<div className="app">
		<>
		
		<div>
			<Slideshow />
		</div>
		<ListMenu />
		<app-game-category-slider >
			<div className="grid-main">
				<div className="home-slot">
					<div className="page-slot">
						<div className="grid-header" >
							<h2 class="sm-head headline text-center with-button">
								<div className="headline-border">
									Merkur Spiele
								</div>
							</h2>
							<Slider className="slider-games">
			<div className="default-scrollbar">
				<div className="grid-games">
					<div className="gallery-img">
					<div className="card-container">
			{Games.games.map((game) => {
	const { name, image } = game;  
	const isExpanded = name === expandedGame;
			return (
				<div key={name} >
				<img className="card-image" src={game.image} alt={name} />
				</div>
			);
			})}
			</div>
			</div>
			</div>
			</div>
	</Slider> 
						</div>
					</div>
				</div>
				</div>
		</app-game-category-slider>
		<app-game-category-slider >
			<div className="grid-main">
				<div className="home-slot">
					<div className="page-slot">
						<div className="grid-header"  >
							<h2 class="sm-head headline text-center with-button">
								<div className="headline-border">
									Novomatic Spiele
								</div>
							</h2>
							<Slider className="slider-games">
			<div className="default-scrollbar">
				<div className="grid-games">
					<div className="gallery-img">
					<div className="card-container">
			{Games.games.map((game) => {
			const { name, image } = game;
			const isExpanded = name === expandedGame;
			return (
				<div key={name} >
				<img className="card-image" src={game.image} alt={name} />
				</div>
					);
			})}
	</div>
		</div>
		</div>
		</div>
		</Slider> 
		</div>
		</div>
		</div>
		</div>
		</app-game-category-slider>
		</>
		</div>
	);
}

export default Index;
