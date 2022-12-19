import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";
import Navbar from "react-bootstrap/Navbar";
import Button from "@mui/material/Button";
const Navbar1 = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://play-lh.googleusercontent.com/bBT7rPEvIr2tvzaXcoIdxeeFd8GNUbpWVl94tmiWOwrzwbjMwzDwyhNvAIl5t37u0c8"
            width="40"
            height="30"
            className="imgnavbar"
          />{" "}
        </Navbar.Brand>
      </Container>

      <div className="navbar2">
        <ul>
          <a className="link1" href="#">
            <li
              onClick={() => {
                navigate("/registro");
              }}
            >
              Registrarse
              <span />
              <span />
              <span />
              <span />
            </li>
          </a>
        </ul>
      </div>
      <div className="navbar2">
        <ul>
          <a className="link1" href="#">
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              Iniciar sesion
              <span />
              <span />
              <span />
              <span />
            </li>
          </a>
        </ul>
      </div>
    </Navbar>
  );
};

export default Navbar1;
