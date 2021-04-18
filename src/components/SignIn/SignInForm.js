import { useState } from "react";
import { Button, ButtonGroup, TextField } from "@material-ui/core";
import "./SignIn.css";

function SignInForm() {
  const [register, setRegister] = useState(false);
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
  });

  function signInClick(event) {
    setRegister(false);
  }

  function registerClick(event) {
    setRegister(true);
  }

  function handleInput(event) {
    const { name, value } = event.target;

    setAccount((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  return (
    <div className=".sign-in-box">
      <ButtonGroup
        size="small"
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button onClick={signInClick}>Sign In</Button>
        <Button onClick={registerClick}>Register</Button>
      </ButtonGroup>
      <form>
        <TextField
          className="input"
          onChange={handleInput}
          name="username"
          type="text"
          value={account.name}
          label="Username"
        />
        {register && (
          <div>
            <TextField
              className="input"
              onChange={handleInput}
              name="email"
              type="email"
              value={account.email}
              label="Email Address"
            />
          </div>
        )}
        <TextField
          className="input"
          onChange={handleInput}
          name="password"
          type="password"
          value={account.password}
          label="Password"
        />

        <Button className="submit-button" variant="contained" color="primary">
          {register ? "Register" : "Sign In"}
        </Button>
      </form>
    </div>
  );
}

export default SignInForm;
