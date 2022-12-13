import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const OneSerie = () => {
  const [pelicula, SetPelicula] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  //   const [name, setName] = useState("");
  //   const[foto, setFoto] = useState("")

  useEffect(() => {
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${params.id}?api_key=ea66feba16438f64ce278c1470d6d9b2`
      )
      .then((res) => SetPelicula(res.data));
  }, []);
  let foto = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <h5 className="titulo">SERIE</h5>
      <table>
        <thead></thead>
        <tbody>
          <tr className="container" key={pelicula.id}>
            <td>
              <h4 className="tituloSingular"> {pelicula.title}</h4>

              <img
                className="imagenes"
                src={foto.concat(pelicula.poster_path)}
                alt="foto"
              />
            </td>
            <td>
              <h4>Fecha de estreno: {pelicula.release_date}</h4>
            </td>
            <td>
              <h4>Puntuacion promedio: {pelicula.vote_average}</h4>
            </td>

            <td>
              <h4>Duracion: {pelicula.runtime} minutos</h4>
            </td>
            <td>
              <h4>Resumen: {pelicula.overview}</h4>
            </td>
          </tr>
        </tbody>
      </table>
      <Button
        variant="dark"
        onClick={() => {
          navigate("/buscarSeries");
        }}
      >
        Seguir Buscando
      </Button>
    </div>
  );
};
export default OneSerie;
