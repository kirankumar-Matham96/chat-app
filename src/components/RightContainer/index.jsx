import React from "react";
import { MessageInput } from "../MessageInput";
import rightContainerStyles from "./index.module.css";

export const RightContainer = () => {
  return (
    <div className={rightContainerStyles.bgContainer}>
      <div className={rightContainerStyles.mainContainer}>
        <div className={rightContainerStyles.mainChatHeader}>
          <div className={rightContainerStyles.headerImage}>
            <img
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1642074083/samples/animals/three-dogs.jpg"
              alt="1group icon"
            />
          </div>
          <div className={rightContainerStyles.headerTextContainer}>
            <p className={rightContainerStyles.groupName}>Group name</p>
            <p className={rightContainerStyles.groupMembersList}>
              Group members names, person 1, person 2, person 1, person 2,
              person 1, person 2, person 1, person 2, person 1, person 2, person
              1, person 2, person 1, person 2, person 1, person 2, person 1,
              person 2, person 1, person 2
            </p>
          </div>
        </div>
      </div>
      <div className={rightContainerStyles.inputContainer}>
        <MessageInput />
      </div>
    </div>
  );
};
