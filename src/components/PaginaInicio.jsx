import App from "./App";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const PaginaInicio = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://play-lh.googleusercontent.com/bBT7rPEvIr2tvzaXcoIdxeeFd8GNUbpWVl94tmiWOwrzwbjMwzDwyhNvAIl5t37u0c8"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Bienvenidos a TMDB
          </Navbar.Brand>
        </Container>
        <Button href="/registro" variant="outline-light">
          Registro
        </Button>{" "}
        <Button href="/login" variant="outline-light">
          Login
        </Button>{" "}
      </Navbar>

      <App />
    </>
  );
};
export default PaginaInicio;
