import axios from "axios";
import { useRef, useState } from "react";
import FormInputs from "../Inputs/FormInputs";
import { Container } from "./styles";

export function Greetings() {

  // const [username, setUsername] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()));
    
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

          <FormInputs name='name' placeholder='Name' />
          <FormInputs name='lastname' placeholder='Last name'/>
          <FormInputs name='cep' placeholder='CEP'/>
          <FormInputs name='address' placeholder='Address'/>
          <FormInputs name='email' placeholder='Email'/>
          <FormInputs name='password' placeholder='Password'/>
          <FormInputs name='confirmpassword' placeholder='Confirm Password'/>


          <button>Create an account</button>
          <button className="btn-sign-in">Sign in</button>
        </form>
      </div>
    </Container>
  );
}
