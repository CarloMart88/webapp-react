import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Star from "../components/Star";

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
          <div className="col-12 my-5 ms-4">
            <h3>
              <em>Your opinion matters</em>
            </h3>
            <form>
              <div className="my-2">
                <label className="form-label">
                  <em>Name:</em>
                </label>
                <input className="ms-2" type="text" name="name" id="name" />
              </div>
              <div className="my-2">
                <label className="form-label">
                  <em>Score:</em>
                </label>
                <input
                  className="ms-2"
                  type="number"
                  min={0}
                  max={5}
                  name="vote"
                  id="vote"
                />
              </div>
              <div className="d-flex position-relative">
                <div className="col-4">
                  <span className="">
                    <em>Your personal reviews:</em>
                  </span>
                  <textarea
                    className="form-control my-1"
                    aria-label="With textarea"
                    maxLength={150}
                    name="text"
                    id="text"
                    placeholder="max 150 words..."
                  ></textarea>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle">
                  <a className="btn back-home p-2 text-center text-light">Ok</a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex my-5 ms-4">
            {movies.reviews ? (
              movies.reviews.map((review) => {
                const { vote, name, text, id } = review;
                return (
                  <div className="col-5 " key={id}>
                    <h2>
                      <em>Your reviews</em>
                    </h2>
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
