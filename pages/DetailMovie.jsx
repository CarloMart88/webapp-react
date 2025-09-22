import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DetailMovie() {
  //recuper l'id
  const { id } = useParams();
  //definisco la variabile di stato
  const [movies, setMovies] = useState([]);

  const dataFecth = () => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((resp) => {
        setMovies(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(dataFecth, []);
  const { image, title, director, abstract, release_year } = movies;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-center ">
          <div className="col-5 detailCard">
            <img src={image} alt={title} />
          </div>
          <div className="col-5 m-5">
            <h1 className="mb-5">
              <em>title:{title}</em>
            </h1>
            <h2 className="mb-3">Director: {director}</h2>
            <h4 className="mb-3">Relased: {release_year}</h4>
            <h4 className="mb-3">The story: {abstract}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
