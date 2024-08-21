import React from "react";
import {Link} from "react-router-dom"
import { Contact } from "../Contact";
import { useSelector } from "react-redux";
import { chatSelector } from "../../redux/reducers/chatSlice";
import contactListStyles from "./index.module.css";

export const ContactsList = () => {
  const { contacts } = useSelector(chatSelector);
  // console.log("contacts => ", contacts);
  return (
    <>
      {contacts.map((contact) => (
        <Link to="/chat">
          <Contact key={contact.id} contact={contact} />
        </Link>
      ))}
    </>
  );
};
