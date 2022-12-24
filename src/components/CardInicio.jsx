import * as React from "react";
import { useState } from "react";
import Prueba from "./prueba";

const CardPeli = ({ fav }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    if (isHovering == false) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  };

  let foto = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      {isHovering === true && (
        // <div className="todohover">
        //   <div> {fav.release_date}</div>
        //   <img className="todohover" src={"/user.png"} alt="Espeon" />
        // </div>
        <Prueba />
      )}
      <tr key={fav.id}>
        <td>
          <img
            onClick={handleMouseOver}
            src={foto.concat(fav.poster_path)}
            alt="Espeon"
            className="fotos"
          />
        </td>
      </tr>
      <h1 className="titulo">{fav.title}</h1>
    </div>
  );
};

export default CardPeli;
