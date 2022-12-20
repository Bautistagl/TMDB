import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ListadoFavs from "./ListadoFavs";
import { useNavigate } from "react-router";

import Navbar2 from "../commons/NavbarIn";
import { client } from "../supabase/client";

const PelisFavs = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [favs, SetFavs] = useState([]);
  useEffect(() => {
    client
      .from("peliculas")
      .select()
      .eq("idUsuario", user.id)
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
