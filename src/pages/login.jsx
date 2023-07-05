import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Register from "./register";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
  };

  const handleRegisterClick = () => {
    setRegisterModalOpen(true);
  };

  const closeModal = () => {
    setRegisterModalOpen(false);
  };

  return (
    <div className="signApp">
      <div className="auth-form-container">
        <div className="h2-container">
        <h2 className="h2-login">Login</h2>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={handleRegisterClick}>
          Don't have an account? Register here.
        </button>
      </div>

      <Modal
        isOpen={isRegisterModalOpen}
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
        <Register />
      </Modal>
    </div>
  );
};

export default Login;
