import React, { useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import ListadoSeries from "./ListadoSeries";


const BusquedaSeries = (peliculas) => {
  const params = useParams();
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [pelicula, SetPelicula] = useState([]);

  const handleLogOut = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=ea66feba16438f64ce278c1470d6d9b2&query=${titulo}&page=${params.id}`
      )
      .then((res) => SetPelicula(res.data));
  };
  const HandleNext = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=ea66feba16438f64ce278c1470d6d9b2&query=${titulo}&page=${
          parseInt(pelicula.page) + 1
        }`
      )
      .then((res) => SetPelicula(res.data));
  };
  const HandlePrevious = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=ea66feba16438f64ce278c1470d6d9b2&query=${titulo}&page=${
          parseInt(pelicula.page) - 1
        }`
      )
      .then((res) => SetPelicula(res.data));
  };

  return (
    <>
    <div >
      <nav> 
        <div className="navbar2"> 
            <form className="forms" onSubmit={handleSubmit}>
              <label>Serie: </label>
              <input value={titulo} onChange={handleTitulo}></input>

              <button className="buttonNavbar" type="submit">Submit</button>
            </form>
            </div>
            <div  className="navbar2" >  
                  <button className="buttonNavbar"
                    onClick={() => {
                      HandlePrevious();
                    }}
                  >
                    Anterior
                   
                  </button> </div>
            <div className="navbar2">
                  <button
                  className="buttonNavbar"
                    onClick={() => {
                      HandleNext();
                    }}
                    
                  >
                    Siguiente
                  
                  </button>
               
             
            </div>
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
        
     

      </nav>
      <ListadoSeries peliculas={pelicula} />
      
    </div>
  </>
  );
};
export default BusquedaSeries;
