import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Login from "./login";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(pass);
  };

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const closeModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div className="signApp">
      <div className="auth-form-container">
        <div className="h2-container">
        <h2 className="h2-login">Registrieren</h2>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="full Name"
          />
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Registrieren</button>
        </form>
        <button className="link-btn" onClick={handleLoginClick}>
          Don't have an account? Register here.
        </button>
      </div>

      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeModal}
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
    </div>
  );
};

export default Register;
