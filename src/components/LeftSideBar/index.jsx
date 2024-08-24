import React from "react";
import { SearchBox } from "../SearchBox";
import { ContactsList } from "../ContactsList";
import { BiMessageSquareAdd } from "react-icons/bi";
import leftNavStyles from "./index.module.css";
import { setShowNewContacts } from "../../redux/reducers/chatSlice";
import { useDispatch } from "react-redux";

/**
 * A functional component representing the left sidebar of the chat application.
 * It includes a header with a title and an icon to open a modal for adding new contacts,
 * a search box for filtering contacts, and a list of contacts.
 * 
 * @returns {JSX.Element} A JSX element representing the left sidebar of the chat application.
 */
export const LeftSideBar = () => {
  const dispatch = useDispatch();

  /**
   * Handles the opening of a modal to show new contacts by dispatching an action.
   * It triggers the `setShowNewContacts` action to display the modal.
   */
  const openModelHandler = () => {
    dispatch(setShowNewContacts());
  };

  return (
    <div className={leftNavStyles.bgContainer}>
      <div className={leftNavStyles.headerContainer}>
        <h2 className={leftNavStyles.h}>Chats</h2>
        <div className={leftNavStyles.iconContainer} onClick={openModelHandler}>
          <BiMessageSquareAdd />
        </div>
      </div>
      <SearchBox />
      <div className={leftNavStyles.contactsContainer}>
        <ContactsList />
      </div>
    </div>
  );
};
