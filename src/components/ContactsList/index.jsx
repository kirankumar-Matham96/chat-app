import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../Contact";
import { useSelector } from "react-redux";
import { chatSelector } from "../../redux/reducers/chatSlice";
import "./index.module.css";

export const ContactsList = () => {
  const { contacts, conversations } = useSelector(chatSelector);
  return (
    <>
      {contacts.map((contact) => {
        const contactConversation = conversations.find(
          (conversations) => conversations.contactId === contact.id
        );
        const lastMessage =
          contactConversation.messages[contactConversation.messages.length - 1];
        console.log("lastMessage => ", lastMessage);

        return (
          <div key={contact.id}>
            <Link to="/chat">
              <Contact contact={contact} lastMessage={lastMessage} />
            </Link>
          </div>
        );
      })}
    </>
  );
};
