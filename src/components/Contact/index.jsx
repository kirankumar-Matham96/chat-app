import React from "react";
import { selectConversation } from "../../redux/reducers/chatSlice";
import { useDispatch } from "react-redux";
import contactStyles from "./index.module.css";

export const Contact = ({ contact, lastMessage }) => {
  const dispatch = useDispatch();
  const { id, name, imgUrl } = contact;

  const onSelectContactHandler = () => {
    // selectConversation
    dispatch(selectConversation(id));
  };

  return (
    <div className={contactStyles.bgContainer} onClick={onSelectContactHandler}>
      <div className={contactStyles.profilePic}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={contactStyles.contactDataContainer}>
        <div className={contactStyles.contactData}>
          <span>{name}</span>
          <span>
            {lastMessage.sender === "You" ? "You: " : ""}
            {+lastMessage.text.length > 20
              ? lastMessage.text.slice(0, 20) + "..."
              : lastMessage.text}
          </span>
        </div>
        <div className={contactStyles.dateContainer}>
          <span>yesterday</span>
        </div>
      </div>
    </div>
  );
};
