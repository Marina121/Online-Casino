const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(cors());

// Definiranje putanje do  JSON datoteke s podacima o igrama
const filePath = "./casinogame.json";

// Definiranje metode za dohvaćanje podataka iz JSON datoteke
function getGames() {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}
app.get("/", (req, res) => {
  res.send("Dobrodošli na online casino!");
});

// API poslužitelj (server.js)
app.get("/components/AllGames/allGames", (req, res) => {
  try {
    const games = getGames();
    res.json(games);
  } catch (error) {
    console.error("Greška pri dohvaćanju igara:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`API poslužitelj  pokrenut na portu ${port}`);
});
