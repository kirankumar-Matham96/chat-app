import React from "react";
import { SearchBox } from "../SearchBox";
import { ContactsList } from "../ContactsList";
import { BiMessageSquareAdd } from "react-icons/bi";
import leftNavStyles from "./index.module.css";

export const LeftSideBar = () => {
  return (
    <div className={leftNavStyles.bgContainer}>
      <div className={leftNavStyles.headerContainer}>
        <h2 className={leftNavStyles.h}>Chats</h2>
        <div className={leftNavStyles.iconContainer}>
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
