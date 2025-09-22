import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-center my-5">
      <h1>Pagina non trovata :( </h1>
      <p className="my-3">
        Ci dispiace la pagina cercata non esiste clicca sul pulsante per tornare
        indietro
      </p>
      <Link to="/">
        <button className="btn back-home mx-5 my-5">
          <i className="fa-regular fa-house" title="torna indietro"></i>
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
