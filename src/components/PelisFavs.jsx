import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import ListadoFavs from "./ListadoFavs";
import { useNavigate } from "react-router";
import Navbar1 from "../commons/Navbar";
import Navbar2 from "../commons/NavbarIn";

const PelisFavs = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [favs, SetFavs] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/users/favoritos/${user.id}`)

      .then((info) => SetFavs(info.data));
  }, []);

  return (
    <>
      <Navbar2 />
      <ListadoFavs favs={favs} />
    </>
  );
};
export default PelisFavs;
