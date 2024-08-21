import React from "react";
import { RightContainer } from "../../components/RightContainer";
import chatStyles from "./index.module.css";

export const Chat = () => {
  return (
    <div className={chatStyles.bgContainer}>
      <RightContainer />
    </div>
  );
};
