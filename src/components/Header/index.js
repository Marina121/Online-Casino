import React, { useState } from "react";
import Modal from "react-modal";
import Register from "../../pages/register";
import Login from "../../pages/login";
import { Link } from "react-router-dom";

import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElement";

Modal.setAppElement("#root");

const Navbar = () => {
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setRegisterModalOpen(true);
    setLoginModalOpen(false); // Close the login modal if it's open
  };

  const handleLoginClick = () => {
    setLoginModalOpen(true);
    setRegisterModalOpen(false); // Close the register modal if it's open
  };

  const handleModalClose = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(false);
  };

  return (
    <div className="Index">
      <Nav>
        <Link to="/home">
          <img
            src="./images/sonnenspiele-logo.webp"
            alt="Logo"
            style={{ width: "auto", height: "50px", margin: "10px" }}
          />
        </Link>
        <NavMenu>
          <NavLink to="/products">Alle virtuelle Automatenspele!</NavLink>
          <NavLink onClick={handleLoginClick}>Anmelden</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtn>
            <NavBtnLink onClick={handleRegisterClick}>Registrieren</NavBtnLink>
          </NavBtn>
        </NavBtn>

        <Modal
          isOpen={isRegisterModalOpen}
          onRequestClose={handleModalClose}
          style={{
            content: {
              width: "40%",
              height: "90%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "8px",
            },
          }}
        >
          <Register />
        </Modal>

        <Modal
          isOpen={isLoginModalOpen}
          onRequestClose={handleModalClose}
          style={{
            content: {
              width: "40%",
              height: "90%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "8px",
            },
          }}
        >
          <Login />
        </Modal>
      </Nav>
    </div>
  );
};

export default Navbar;
