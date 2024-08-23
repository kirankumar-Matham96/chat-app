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
        if (contact.id === 0) {
          return;
        }

        const contactConversation = conversations.find((conversations) => {
          if (
            conversations.type === "individual" &&
            conversations.contactId === contact.id
          ) {
            return true;
          }
          if (
            conversations.type === "group" &&
            conversations.groupId === contact.id
          ) {
            return true;
          }
          return false;
        });

        let lastMessage = "";
        if (
          contactConversation &&
          contactConversation.messages &&
          contactConversation.messages.length > 0
        ) {
          lastMessage =
            contactConversation.messages[
              contactConversation.messages.length - 1
            ];
        }

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
