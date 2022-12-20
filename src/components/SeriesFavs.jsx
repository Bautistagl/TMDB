import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import ListadoFavsSeries from "./ListadoFavsSeries";
import { useNavigate } from "react-router";
import Navbar2 from "../commons/NavbarIn";

const SeriesFavs = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [favs, SetFavs] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://tmdb-back3.onrender.com/api/users/favoritosSeries/${user.id}`,
        { withCredentials: true, credentials: "include" }
      )

      .then((info) => SetFavs(info.data));
  }, []);

  return (
    <>
      <Navbar2 />

      <ListadoFavsSeries favs={favs} />
    </>
  );
};
export default SeriesFavs;
