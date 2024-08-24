import React from "react";
import { FaUserAlt } from "react-icons/fa";
import newContactTileStyles from "./index.module.css";

/**
 * A functional component that renders a tile for a new contact.
 * It displays the contact's profile picture or a default icon if no picture is provided,
 * and provides an indication that the contact can be added to conversations.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.contact - The contact object to be displayed.
 * @param {number} props.contact.id - The unique identifier for the contact.
 * @param {string} props.contact.name - The name of the contact.
 * @param {string} [props.contact.imgUrl] - The URL of the contact's profile picture (optional).
 *
 * @returns {JSX.Element} A JSX element representing the contact tile.
 */
export const NewContactTile = ({ contact }) => {
  const { name, imgUrl } = contact;
  return (
    <div className={newContactTileStyles.bgContainer}>
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
