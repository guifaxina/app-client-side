import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import Modal from "react-modal";
import { ContainerModal } from "./stylesModal";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserLogin({ ...userLogin, [e.target.type]: e.target.value });
    console.log(userLogin);
  }

  async function handleLoginSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/user/login", userLogin)
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("name", res.headers.name);
          localStorage.setItem("isadmin", res.headers.isadmin);
          localStorage.setItem("token", res.headers.authorization);
          navigate("/products");
        }
      });
  }

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  function onOpenModal() {
    setIsSignInModalOpen(true);
  }

  function onCloseModal() {
    setIsSignInModalOpen(false);
  }

  return (
    <Container>
      <p>
        Already have an account? <span onClick={onOpenModal}>Sign In</span>
      </p>
      <Modal
        isOpen={isSignInModalOpen}
        onRequestClose={onCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <ContainerModal>
          <h2>Sign in</h2>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={onChange}
          />
          <input type="password" placeholder="Password" onChange={onChange} />
          <button type="submit" onClick={handleLoginSubmit}>
            Login
          </button>
        </ContainerModal>
      </Modal>
    </Container>
  );
}

export default SignIn;
