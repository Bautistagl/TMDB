import * as React from "react";

const CardPeli = ({ fav }) => {
  let foto = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <tr key={fav.id}>
        <td>
          <figure class="card card--dark">
            <div class="card__image-container">
              <img
                src={foto.concat(fav.poster_path)}
                alt="Espeon"
                class="card__image"
              />
            </div>

            <figcaption class="card__caption">
              <h1 class="card__name">{fav.title}</h1>
            </figcaption>
          </figure>
        </td>
      </tr>
    </div>
  );
};

export default CardPeli;
