import App from "./App";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar1 from "../commons/Navbar";

const PaginaInicio = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  return (
    <>
      <Navbar1 />

      <App />
    </>
  );
};
export default PaginaInicio;
