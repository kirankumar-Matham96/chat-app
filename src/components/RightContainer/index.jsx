import React, { useEffect } from "react";
import { MessageCard } from "../MessageCard";
import { MessageInput } from "../MessageInput";
import { useDispatch, useSelector } from "react-redux";
import { initialLoad, chatSelector } from "../../redux/reducers/chatSlice";
import rightContainerStyles from "./index.module.css";

export const RightContainer = () => {
  const dispatch = useDispatch();
  const { currentContact, currentConversation } = useSelector(chatSelector);

  useEffect(() => {
    dispatch(initialLoad());
  }, [dispatch]);

  return (
    <div className={rightContainerStyles.bgContainer}>
      <div className={rightContainerStyles.mainContainer}>
        <div className={rightContainerStyles.mainChatHeader}>
          <div className={rightContainerStyles.headerImage}>
            <img src={currentContact.imgUrl} alt={currentContact.name} />
          </div>
          <div className={rightContainerStyles.headerTextContainer}>
            <p className={rightContainerStyles.groupName}>
              {currentContact.name}
            </p>
          </div>
        </div>
        <div className={rightContainerStyles.mainChatBody}>
          {currentConversation.messages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </div>
      </div>
      <div className={rightContainerStyles.inputContainer}>
        <MessageInput />
      </div>
    </div>
  );
};
