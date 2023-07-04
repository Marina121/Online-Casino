import React, { useState } from "react";
import Modal from "react-modal";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";

Modal.setAppElement("#root");

function Navbar() {
  const [] = useState("login");

  return (
    <div className="Index">
      <Nav>
        <img
          src="./images/sonnenspiele-logo.webp"
          alt="Logo"
          style={{ width: "auto", height: "50px", margin: "10px" }}
        />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>

          <NavLink to="/products" activeStyle>
            Games
          </NavLink>
          <NavLink to="/login" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="./register" activeStyle>
            Sign In
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
}

export default Navbar;
