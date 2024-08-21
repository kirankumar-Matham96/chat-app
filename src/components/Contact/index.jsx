import React from "react";
import { selectConversation } from "../../redux/reducers/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import contactStyles from "./index.module.css";

export const Contact = ({ contact }) => {
  // selectConversation
  const dispatch = useDispatch();
  const { id, name, imgUrl } = contact;

  const onSelectContactHandler = () => {
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
          <span>Some text form chat...</span>
        </div>
        <div className={contactStyles.dateContainer}>
          <span>yesterday</span>
        </div>
      </div>
    </div>
  );
};
