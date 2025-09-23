import React from "react";

function Star({ vote }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((num, i) => {
        return (
          <i
            key={i}
            className={`fa ${
              i < vote ? `fa-solid` : `fa-regular`
            } fa-star text-warning ms-2`}
          ></i>
        );
      })}{" "}
    </>
  );
}

export default Star;
