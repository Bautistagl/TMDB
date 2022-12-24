import React from "react";
import { useState } from "react";
const Prueba = () => {
  return (
    <div className="todohover">
      <div className="container">
        <div className="cellphone-container">
          <div className="movie">
            <div className="menu">
              <i className="material-icons"></i>
            </div>
            <img
              src="https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
              className="movie-img"
            />
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>Interstellar</h1>
                  <ul className="movie-gen">
                    <li>PG-13 /</li>
                    <li>2h 49min /</li>
                    <li>Adventure, Drama, Sci-Fi,</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid summary-row">
                <div className="col2">
                  <h5>SUMMARY</h5>
                </div>
                <div className="col2">
                  <ul className="movie-likes">
                    <li>
                      <i className="material-icons"></i>124
                    </li>
                    <li>
                      <i className="material-icons"></i>3
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid">
                <div className="col1">
                  <p className="movie-description">
                    A group of elderly people are giving interviews about having
                    lived in a climate of crop blight and constant dust
                    reminiscent of The Great Depression of the 1930's. The first
                    one seen is an elderly woman stating her father was a
                    farmer, but did not start out that way.{" "}
                  </p>
                </div>
              </div>
              <div className="mr-grid actors-row">
                <div className="col1">
                  <p className="movie-actors">
                    Matthew McConaughey, Anne Hathaway, Jessica Chastain
                  </p>
                </div>
              </div>
              <div className="mr-grid action-row">
                <div className="col2">
                  <div className="watch-btn">
                    <h3>
                      <i className="material-icons"></i>WATCH TRAILER
                    </h3>
                  </div>
                </div>
                <div className="col6 action-btn">
                  <i className="material-icons"></i>
                </div>
                <div className="col6 action-btn">
                  <i className="material-icons"></i>
                </div>
                <div className="col6 action-btn">
                  <i className="material-icons"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prueba;
