import React from "react";
import { RightContainer } from "../../components/RightContainer";
import chatStyles from "./index.module.css";

/**
 * A functional component that represents the chat view/page.
 * It renders the `RightContainer` component inside a container with specific styles.
 *
 * @returns {JSX.Element} A JSX element representing the chat view.
 */
export const Chat = () => {
  return (
    <div className={chatStyles.bgContainer}>
      <RightContainer />
    </div>
  );
};
