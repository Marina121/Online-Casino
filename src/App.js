import React from "react";

import "./App.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer/fotter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Register from "./pages/register";
import Products from "./pages/products";
import Login from "./pages/login";
import Gameplay from "./pages/gameplay";
import AllGames from "./components/AllGames/allGames";
import ListMenu from "./components/ListMenu/listMenu";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={AllGames} />
          <Route path="/gameplay/:name" element={<Gameplay />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
