import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

const validName = "THANOS";
const validPassword = "IRON MAN";

export function LoginAccount({ handleLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onLogin() {
    if (validName == name && validPassword == password) {
      console.log("pass");
      handleLogin();
    } else {
      console.log("fail");
      //   window.alert("Incorrect username or password!");
      setError("Incorrect username or password!");
    }

    // handleLogin();
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <form onSubmit={onLogin} className="login-page-container">
      <div className="login-page-heading">Login To Your Website and enjoy</div>
      <div className="name-container">
        <Form.Label>Enter User Name</Form.Label>
        <Form.Control
          value={name}
          onChange={handleNameChange}
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="password-container">
        <Form.Label>Enter User Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="button-container">
        <Button type="submit" variant="primary">
          Login
        </Button>
      </div>
      {error != "" && <Alert variant="danger">{error}</Alert>}
      <div>{/* <a href="/register">Creat new account</a> */}</div>
    </form>
  );
}
