import React from "react";
import { MessageInput } from "../MessageInput";
import rightContainerStyles from "./index.module.css";

export const RightContainer = () => {
  return (
    <div className={rightContainerStyles.bgContainer}>
      <div className={rightContainerStyles.mainContainer}>
        Main message container
      </div>
      <div className={rightContainerStyles.inputContainer}>
        <MessageInput />
      </div>
    </div>
  );
};
