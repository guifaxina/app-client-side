import axios from "axios";
import { Container } from "./styles";

// let name: string = (document.getElementById('name') as HTMLInputElement).value
// let lastName = (document.getElementById('lastName') as HTMLInputElement).value;
// let cep = document.getElementById('cep').value;
// let address = document.getElementById('address').value;
// let email = document.getElementById('email').value;
// let password = document.getElementById('password').value;

export function Greetings() {


  function handleSignIn(){
    axios.post("http://localhost:3001/user/login")
  }

  const handleSignUp = (e) => {
    // axios.post("http://localhost:3001/user/register", optionsSignUp)
    e.preventDefault()
    console.log("Hello, world");
  }

  return (
    <Container>
      <div className="greetings-div">
        <h1>Arketfy</h1>
        <h2>
          Bringing to you the first-rate quality of the latest technologies.
        </h2>
      </div>

      <div className="form">
        <form action="" className="form">
          <input type="text" name="name" placeholder="Name" id="name"></input>
          <input type="text" name="lastName" placeholder="Last name" id="lastName"></input>
          <input type="text" name="cep" placeholder="CEP" id="cep"></input>
          <input type="text" name="address" placeholder="Address" id="address"></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
          ></input>
          <input type="password" name="password" placeholder="Password" id="password"></input>
          
          <button onClick={event => handleSignUp(event.target.value)}>Create an account</button>
          <button onClick={handleSignIn} className="btn-sign-in">Sign in</button>
        </form>
      </div>
    </Container>
  );
}
