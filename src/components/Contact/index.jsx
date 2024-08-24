import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { selectConversation } from "../../redux/reducers/chatSlice";
import { useDispatch } from "react-redux";
import contactStyles from "./index.module.css";

export const Contact = ({ contact, lastMessage }) => {
  const isToday = (dateString) => {
    const dateArr = dateString.split("-");
    const date = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
    console.log("new Date() => ", new Date());
    console.log("new Date(date) => ", new Date(date));
    return new Date().getDate() === new Date(date).getDate();
  };

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
          <span>
            {lastMessage ? (
              !isToday(lastMessage.timestamp.date) ? (
                <>
                  {lastMessage.timestamp.date}
                  <br />
                  {lastMessage.timestamp.time}
                </>
              ) : (
                `${lastMessage.timestamp.time}`
              )
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
