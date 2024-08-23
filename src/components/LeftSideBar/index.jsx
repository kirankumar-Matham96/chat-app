import React from "react";
import { SearchBox } from "../SearchBox";
import { ContactsList } from "../ContactsList";
import { BiMessageSquareAdd } from "react-icons/bi";
import leftNavStyles from "./index.module.css";
import { setShowNewContacts } from "../../redux/reducers/chatSlice";
import { useDispatch } from "react-redux";

export const LeftSideBar = () => {
  const dispatch = useDispatch();

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
