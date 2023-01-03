import * as React from "react";
import { useState } from "react";


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
    <div className="cartas">
      
      {isHovering === true && (
       
       <>  <div className="todohover">
       <div className="container1">
         <div className="cellphone-container">
           <div className="movie">
             <div className="menu">
              <img onClick={handleMouseOver} className="icono" src={"/multiply (1).png"}/>
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
                     
                     <li>{fav.release_date} /</li>
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
      {/* <h1 className="titulo">{fav.title}</h1> */}
    </div>
  );
};

export default CardPeli;
