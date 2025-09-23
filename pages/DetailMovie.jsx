import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Star from "../components/Star";
import FormReviews from "../components/FormReviews";

function DetailMovie() {
  //recuper l'id
  const { id } = useParams();
  //definisco la variabile di stato
  const [movies, setMovies] = useState({});

  let navigate = useNavigate();

  const dataFecth = () => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((resp) => {
        setMovies(resp.data);
      })
      .catch((err) => navigate("/not-found", { replace: true }));
  };

  useEffect(dataFecth, [id, navigate]);
  const { image, title, director, abstract, release_year } = movies;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-center ">
          <div className="col-5 detailCard">
            <img src={image} alt={title} />
          </div>
          <div className="col-5 m-5 description-card">
            <h1 className="mb-5">
              Title:<em> {title}</em>
            </h1>
            <h2 className="mb-3">Director: {director}</h2>
            <h4 className="mb-3">Relased: {release_year}</h4>
            <h4 className="mb-3">The story: {abstract}</h4>
            <Link to="/">
              <button className="btn back-home mx-5 my-5">
                <i className="fa-regular fa-house" title="torna indietro"></i>
              </button>
            </Link>
            <button
              className="btn back-home mx-4"
              onClick={() => navigate(`/api/movies/${parseInt(id) - 1}`)}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="btn back-home"
              onClick={() => navigate(`/api/movies/${parseInt(id) + 1}`)}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="row">
          <FormReviews movieId={id} fetch={dataFecth} />
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h2>
              <em>Your reviews</em>
            </h2>
          </div>
          <div className="col-12 d-flex flex-wrap my-5 ms-4">
            {movies.reviews ? (
              movies.reviews.map((review) => {
                const { vote, name, text, id } = review;
                return (
                  <div className="col-5 my-3 ms-3" key={id}>
                    <h5>Name: {name} </h5>
                    <h5>
                      Vote: {vote}
                      <Star vote={vote} />
                    </h5>
                    <h5>Text: {text} </h5>
                  </div>
                );
              })
            ) : (
              <h1>
                <em>Unfortunately there are not reviews at the moment </em>
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
