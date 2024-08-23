import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chatSelector,
  createConversation,
} from "../../redux/reducers/chatSlice";
import { NewContactTile } from "../NewContactTile";
import newContactsStyles from "./index.module.css";

export const NewContacts = () => {
  const { newContacts, showNewContacts } = useSelector(chatSelector);
  const dispatch = useDispatch();

  const selectContactHandler = (contact) => {
    dispatch(createConversation(contact));
  };

  return (
    <>
      {showNewContacts ? (
        <div className={newContactsStyles.bgContainer}>
          <div className={newContactsStyles.contactsContainer}>
            {newContacts.map((contact) => (
              <div
                className={newContactsStyles.contactTile}
                onClick={() => selectContactHandler(contact)}
              >
                <NewContactTile key={contact.id} contact={contact} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
