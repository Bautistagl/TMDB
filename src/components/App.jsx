import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Container from "./Container";

const App = () => {
  const [pelicula, SetPelicula] = useState([]);
  const params = useParams();

  //   const [name, setName] = useState("");
  //   const[foto, setFoto] = useState("")

  useEffect(() => {
    axios
      .get(
        ` https://api.themoviedb.org/3/movie/popular?api_key=ea66feba16438f64ce278c1470d6d9b2&page=${params.page}`
      )

      .then((res) => SetPelicula(res.data));
  }, []);

  return (
    <div className="background">
      <Container peliculas={pelicula.results} />
    </div>
  );
};
export default App;
