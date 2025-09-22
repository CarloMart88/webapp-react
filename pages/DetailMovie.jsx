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

  return <div>dettaglio</div>;
}

export default DetailMovie;
