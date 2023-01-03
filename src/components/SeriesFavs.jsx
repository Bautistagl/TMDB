import "bootstrap/dist/css/bootstrap.min.css";


import { useEffect, useState } from "react";

import ListadoFavsSeries from "./ListadoFavsSeries";
import { useNavigate } from "react-router";

import { client } from "../supabase/client";

const SeriesFavs = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("usuario"));
  const [favs, SetFavs] = useState([]);
  const handleLogOut = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };
  useEffect(() => {
    client
      .from("series1")
      .select()
      .eq("idUsuario", user.id)
      .then((info) => SetFavs(info.data));
  }, []);

  return (
    <>
    
    <div className="navbar2">
          
             
          <button
          className="buttonNavbar"
            onClick={() => {
              navigate("/Usuario");
            }}
          >
            Inicio
         
          </button>
    
     
    </div>
    <div className="navbar2">
    
       
          <button
          className="buttonNavbar"
            onClick={() => {
              handleLogOut();
            }}
          >
            Cerrar Sesion
         
          </button>
      
    
    </div>
      <ListadoFavsSeries favs={favs} />
    </>
  );
};
export default SeriesFavs;
