import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { selectConversation } from "../../redux/reducers/chatSlice";
import { useDispatch } from "react-redux";
import contactStyles from "./index.module.css";

export const Contact = ({ contact, lastMessage }) => {
  const dispatch = useDispatch();

  const { groupId, id, name, imgUrl } = contact;

  const onSelectContactHandler = () => {
    // selectConversation
    if (groupId) {
      dispatch(selectConversation(groupId));
    } else {
      dispatch(selectConversation(id));
    }
  };

  return (
    <div className={contactStyles.bgContainer} onClick={onSelectContactHandler}>
      <div className={contactStyles.profilePic}>
        {imgUrl ? <img src={imgUrl} alt={name} /> : <FaUserAlt />}
      </div>
      <div className={contactStyles.contactDataContainer}>
        <div className={contactStyles.contactData}>
          <span>{name}</span>
          {lastMessage ? (
            <span>
              {lastMessage.sender === "You" ? "You: " : ""}
              {+lastMessage.text.length > 20
                ? lastMessage.text.slice(0, 20) + "..."
                : lastMessage.text}
            </span>
          ) : (
            <span>Start conversation</span>
          )}
        </div>
        <div className={contactStyles.dateContainer}>
          <span>{lastMessage ? lastMessage.timestamp.time : ""}</span>
        </div>
      </div>
    </div>
  );
};
