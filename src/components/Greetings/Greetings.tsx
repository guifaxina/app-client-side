import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import FormInputs from "../Inputs/FormInputs";
import SignIn from "../SignIn/SignIn";
//styles
import { Container } from "./styles";
import { ContainerModal } from "./stylesModal";

export function Greetings() {
  const [values, setValues] = useState<{ [key: string]: string }>({
    name: "",
    lastName: "",
    cep: "",
    address: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
   
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "John",
      label: "Name",
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Doe",
      label: "Last Name",
    },
    {
      id: 3,
      name: "cep",
      type: "text",
      placeholder: "60123888",
      label: "Cep",
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "59 New York st",
      label: "Address",
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "johndoe@mail.com",
      label: "Email",
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 7,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  const [registerErrorMessage, setRegisterErrorMessage] = useState<string[]>([])

  let navigate = useNavigate();

  //Error message modal related
  const [isErrorMessageModalOpen, setIsErrorMessageModalOpen] = useState(false);
  
  function onCloseModalErrorMessage() {
    setIsErrorMessageModalOpen(false)
    setRegisterErrorMessage([])
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = Object.fromEntries(data.entries());    
    await axios.post(`${import.meta.env.VITE_URL}/user/register`, userData).then(res => {
      if (res.status == 201) {
        localStorage.setItem("token", res.headers.authorization);
        navigate("/products");
      }})
      .catch(error => {
        if (error.response.data.data) {
          setRegisterErrorMessage(error.response.data.data)
        }
        registerErrorMessage.push(error.response.data.message)
        console.log(error.response.data.data)
        setIsErrorMessageModalOpen(true);
      });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <div className="greetings-div">
        <h1>Arketfy</h1>
        <h2>
          Bringing to you the first-rate quality of the latest technologies.
        </h2>
      </div>

      <div className="right-div">
        <form className="form" onSubmit={handleSubmit}>
          {inputs.map((input) => {
            return (
              <FormInputs
                key={input.id}
                onChange={onChange}
                {...input}
                value={values[input.name]}      
              /> 
            );
          })}
          <button type="submit">Create an account</button>
        </form>
        <Modal 
        isOpen={isErrorMessageModalOpen}
        onRequestClose={onCloseModalErrorMessage}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
          <ContainerModal>
          <h2>Oops! Something went wrong 😵‍💫</h2>
          <ul>
            {registerErrorMessage.map(item => 
                <li key={item}>
                  <strong>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </strong>
                </li>)}
          </ul>
          <input type="button" value="OK" onClick={onCloseModalErrorMessage} className="register-error-btn"/>
          </ContainerModal>
        </ Modal>
        <SignIn />  
      </div>
    </Container>
  );
}
function elif() {
  throw new Error("Function not implemented.");
}

