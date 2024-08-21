import React from "react";
import errorStyles from "./index.module.css";

export const ErrorPage = () => {
  return (
    <div className={errorStyles.bgContainer}>
      <h1>Page Not Found!</h1>
      <div>
        <img
          src="https://res.cloudinary.com/do4v7miwh/image/upload/v1724205760/samples/Gifs/giphy_xc7i5a.webp"
          alt="error"
        />
      </div>
    </div>
  );
};
