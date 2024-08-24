import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  chatSelector,
  createConversation,
  setShowNewContacts,
} from "../../redux/reducers/chatSlice";
import { NewContactTile } from "../NewContactTile";
import newContactsStyles from "./index.module.css";

/**
 * A functional component that renders a list of new contacts.
 * It displays new contacts in a tile format if the `showNewContacts` flag is true,
 * and dispatches an action to create a new conversation when a contact is selected.
 *
 * @returns {JSX.Element} A JSX element representing the list of new contacts or null if `showNewContacts` is false.
 */
export const NewContacts = () => {
  const { newContacts, showNewContacts } = useSelector(chatSelector);
  const dispatch = useDispatch();

  /**
   * Handles the selection of a new contact. Dispatches an action to create a new conversation
   * with the selected contact.
   *
   * @param {Object} contact - The contact object that is selected.
   */
  const selectContactHandler = (contact) => {
    dispatch(createConversation(contact));
  };

  /**
   * Handles the closing of the pop-up modal.
   * Dispatches an action to set the showNewContacts value to false.
   */
  const closeModalHandler = () => {
    dispatch(setShowNewContacts(false));
  };

  return (
    <>
      {showNewContacts ? (
        <div className={newContactsStyles.bgContainer}>
          <button  className={newContactsStyles.closeBtn} onClick={closeModalHandler} title="close">
            <IoClose />
          </button>
          <div className={newContactsStyles.contactsContainer}>
            {newContacts.map((contact) => (
              <div
                key={contact.id}
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
