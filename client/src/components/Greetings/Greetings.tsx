import axios from "axios";
import { useEffect, useState } from "react";
import FormInputs from "../Inputs/FormInputs";
import { Container } from "./styles";


export function Greetings() {
  const [ values, setValues ] = useState<{ [key: string]: string }>({
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
      id:1,
      name:'name',
      type:'text',
      placeholder:'John',
      label:'Name'
    },
    {
      id:2,
      name:'lastName',
      type:'text',
      placeholder:'Doe',
      label:'Last Name'
    },
    {
      id:3,
      name:'cep',
      type:'text',
      placeholder:'60123888',
      label:'Cep'
    },
    {
      id:4,
      name:'address',
      type:'text',
      placeholder:'59 New York st',
      label:'Address'
    },
    {
      id:5,
      name:'email',
      type:'email',
      placeholder:'johndoe@mail.com',
      label:'Email'
    },
    {
      id:6,
      name:'password',
      type:'password',
      placeholder:'Password',
      label:'Password'
    },
    {
      id:7,
      name:'confirmpassword',
      type:'password',
      placeholder:'Confirm Password',
      label:'Confirm Password'
    },
  ]

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userData = Object.fromEntries(data.entries())
    axios.post("http://localhost:3001/user/register", userData)
  };

  const onChange = (e: any) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <Container>
      <div className="greetings-div">
        <h1>Arketfy</h1>
        <h2>
          Bringing to you the first-rate quality of the latest technologies.
        </h2>
      </div>

      <div>
        <form className="form" onSubmit={handleSubmit}>   
            {inputs.map((input) => {
              return (
              <FormInputs
                key={input.id}
                onChange={onChange}
                {...input}
                value={values[input.name]}
              />
              )
            })}
            <button>Create an account</button>
            <button className="btn-sign-in">Sign in</button> 
        </form>
      </div>
    </Container>
  );
}
