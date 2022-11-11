import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInputs from "../Inputs/FormInputs";
import SignIn from "../SignIn/SignIn";
//styles
import { Container } from "./styles";

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

  let navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    const userData = Object.fromEntries(data.entries());    
    await axios.post(`${import.meta.env.VITE_URL}/user/register`, userData).then(res => {
      if (res.status == 201) {
        localStorage.setItem("token", res.headers.authorization);
        navigate("/products");
      }
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
        <SignIn />
      </div>
    </Container>
  );
}
