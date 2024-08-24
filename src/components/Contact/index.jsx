import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { selectConversation } from "../../redux/reducers/chatSlice";
import { useDispatch } from "react-redux";
import contactStyles from "./index.module.css";

/**
 * A functional component representing a contact in the chat application.
 * Displays the contact's profile picture, name, last message, and timestamp.
 * 
 * @param {Object} props - The props object.
 * @param {Object} props.contact - The contact object containing details like id, name, and imgUrl.
 * @param {Object} props.lastMessage - The last message object containing details like sender, text, and timestamp.
 * 
 * @returns {JSX.Element} A JSX element representing a contact item.
 */
export const Contact = ({ contact, lastMessage }) => {
  /**
   * Checks if the provided date string corresponds to today's date.
   * 
   * @param {string} dateString - The date string in the format 'dd-mm-yyyy'.
   * @returns {boolean} True if the date is today, false otherwise.
   */
  const isToday = (dateString) => {
    const dateArr = dateString.split("-");
    const date = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
    return new Date().getDate() === new Date(date).getDate();
  };

  const dispatch = useDispatch();
  const { groupId, id, name, imgUrl } = contact;

  /**
   * Handles the selection of a contact by dispatching an action to select the conversation.
   * Dispatches the groupId if available, otherwise dispatches the contact id.
   */
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
