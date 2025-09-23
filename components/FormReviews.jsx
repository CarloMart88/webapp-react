import axios from "axios";
import { useState } from "react";
//importo anche come props la funzione di dataFetching che si aggiorna man mano le rieviews aumentano
function FormReviews({ movieId, fetch }) {
  //prendo l'url aggiungendo l'id che ho passato come props
  const apiUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;

  //creo l'oggetto vuoto
  const initialData = {
    text: "",
    vote: "",
    name: "",
  };

  //oggetto vuoto di useState inizialmente
  const [formData, setFormData] = useState(initialData);

  // tramite la funzione posso aggiornare i campi di fielData vuoti
  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //faccio la chiamata con post
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setFormData(initialData);
        fetch();
      });
  };

  return (
    <div className="col-12 my-5 ms-4">
      <h3>
        <em>Your opinion matters</em>
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="my-2 ">
          <label className="form-label">
            <em>Name:</em>
          </label>
          <input
            className="ms-2 text-black"
            type="text"
            name="name"
            id="name"
            onChange={setFieldValue}
            value={formData.name}
          />
        </div>
        <div className="my-2">
          <label className="form-label">
            <em>Score:</em>
          </label>
          <input
            className="ms-2 text-black"
            type="number"
            min={0}
            max={5}
            name="vote"
            id="vote"
            onChange={setFieldValue}
            value={formData.vote}
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
              onChange={setFieldValue}
              value={formData.text}
            ></textarea>
          </div>
          <div className="position-absolute top-50 start-50 translate-middle">
            <button
              className="btn back-home p-2 text-center text-light"
              type="submit"
            >
              Ok
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormReviews;
