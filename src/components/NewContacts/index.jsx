import React from "react";
import { useSelector } from "react-redux";
import { chatSelector } from "../../redux/reducers/chatSlice";
import { NewContactTile } from "../NewContactTile";
import newContactsStyles from "./index.module.css";

export const NewContacts = () => {
  const { newContacts, showNewContacts } = useSelector(chatSelector);

  return (
    <>
      {showNewContacts ? (
        <div className={newContactsStyles.bgContainer}>
          <div className={newContactsStyles.contactsContainer}>
            {newContacts.map((contact) => (
              <div className={newContactsStyles.contactTile}>
                <NewContactTile key={contact.id} contact={contact} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
