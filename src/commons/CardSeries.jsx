import * as React from "react";
import { client } from "../supabase/client";

import { useState } from "react";

const CardSerie = ({ fav }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    if (isHovering == false) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  };
  let foto = "https://image.tmdb.org/t/p/w500";
  const user = JSON.parse(localStorage.getItem("usuario"));
  const handleFav = async (a) => {
    try {
      const { data, error } = await client.from("series1").insert({
        foto: a.poster_path,
        titulo: a.name,
        fecha: a.release_date,
        idUsuario: user.id,

        valoracion: a.vote_average,
        resumen: a.overview,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {isHovering === true && (
       
       <>  <div className="todohover">
       <div className="container1">
         <div className="cellphone-container">
           <div className="movie">
             <div className="menu">
              <img onClick={handleMouseOver} className="icono" src={"/multiply.png"}/>
             </div>
             <img
               src={foto.concat(fav.poster_path)}
               className="movie-img"
             />
             <div className="text-movie-cont">
               <div className="mr-grid">
                 <div className="col1">
                   <h4>{fav.title}</h4>
                   <ul className="movie-gen">
                     
                     <li>{fav.first_air_date} /</li>
                     <li>Calificación general: {fav.vote_average}/10</li>
                   </ul>
                 </div>
               </div>
               <div className="mr-grid summary-row">
                 <div className="col2">
                   <h5>RESUMEN</h5>
                 </div>
                 <div className="col2">
                  
                 </div>
               </div>
               <div className="mr-grid">
                 <div className="col1">
                   <p className="movie-description">
                    {fav.overview}
                    {" "}
                   </p>
                 </div>
               </div>
               <div className="mr-grid actors-row">
                 <div className="col1">
                  
                 </div>
               </div>
               <div className="mr-grid action-row">
                   
               <div className="col6 action-btn">
                   <img  onClick={() => {
                    handleFav(fav)
                  }} className="icono" src="/favourite.png"/>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div></>
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

export default CardSerie;
