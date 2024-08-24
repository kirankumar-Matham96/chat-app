import homeStyles from "./index.module.css";

/**
 * A functional component that renders the home page.
 * It returns a `div` element with a background style applied from the CSS module.
 *
 * @returns {JSX.Element} A JSX element representing the home page.
 */
export const Home = () => {
  return <div className={homeStyles.bgContainer}></div>;
};
