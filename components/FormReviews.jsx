import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

function FormReviews({ movieId }) {
  //prendo l'url aggiungendo l'id che ho passato come props
  const apiUrl = `http://localhost:5173/api/movies/${movieId}/reviews`;

  const [formData, setFormData] = useState({
    text: "",
    vote: "",
    name: "",
  });

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
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
  );
}

export default FormReviews;
