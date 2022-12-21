import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ListadoFavsSeries from "./ListadoFavsSeries";
import { useNavigate } from "react-router";
import Navbar2 from "../commons/NavbarIn";
import { client } from "../supabase/client";

const SeriesFavs = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("usuario"));
  const [favs, SetFavs] = useState([]);
  useEffect(() => {
    client
      .from("series1")
      .select()
      .eq("idUsuario", user.id)
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
