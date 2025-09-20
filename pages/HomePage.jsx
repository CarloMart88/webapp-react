import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

//creo la variabile per il data fetching che farò direttamente nello useEffect con la chiamata axios

function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((resp) => {
        setMovies(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(movies);

  return (
    <div className="container body">
      <div className="row">
        <div className="col-12 attribute">
          {movies.map((movie) => {
            const {
              id,
              title,
              director,
              genre,
              release_year,
              image,
              abstract,
            } = movie;
            return (
              <div className="col-12 col-md-6 col-lg-4 card m-5" key={id}>
                <div className="card-img">
                  <img src={image} alt={title} />
                </div>
                <div className="overlay">
                  <div className="card-body my-5">
                    <h2>Title:{title} </h2>
                    <h5>Director: {director} </h5>
                    <h5>Genre: {genre}</h5>
                    <h5>Relase: {release_year}</h5>
                    <h6>Description: {abstract} </h6>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
