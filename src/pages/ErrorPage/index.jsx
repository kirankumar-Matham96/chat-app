import React from "react";
import errorStyles from "./index.module.css";

/**
 * A functional component that displays an error page.
 * It shows a "Page Not Found!" message along with an error image.
 *
 * @returns {JSX.Element} A JSX element representing the error page.
 */
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
