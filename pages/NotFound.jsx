import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-center my-5">
      <h1>Page not found </h1>
      <p className="my-3">We 're sorry but we couldn't find any films</p>
      <Link to="/">
        <button className="btn back-home mx-5 my-5">
          <i className="fa-regular fa-house" title="torna indietro"></i>
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
