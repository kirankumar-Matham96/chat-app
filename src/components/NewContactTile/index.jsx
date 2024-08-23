import React from "react";
import { FaUserAlt } from "react-icons/fa";
import newContactTileStyles from "./index.module.css";

const onSelectContactHandler = () => {};

export const NewContactTile = ({ contact }) => {
  const { id, name, imgUrl } = contact;
  return (
    <div
      className={newContactTileStyles.bgContainer}
      onClick={onSelectContactHandler}
    >
      <div className={newContactTileStyles.profilePic}>
        {imgUrl ? <img src={imgUrl} alt={name} /> : <FaUserAlt />}
      </div>
      <div className={newContactTileStyles.contactDataContainer}>
        <div className={newContactTileStyles.contactData}>
          <span>{name}</span>
          <span>Add to conversations</span>
        </div>
      </div>
    </div>
  );
};
