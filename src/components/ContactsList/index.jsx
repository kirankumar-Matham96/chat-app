import { Link } from "react-router-dom";
import { Contact } from "../Contact";
import { useSelector } from "react-redux";
import { chatSelector } from "../../redux/reducers/chatSlice";
import "./index.module.css";

/**
 * A functional component that renders a list of contacts.
 * It fetches the contacts and their corresponding conversations from the Redux store,
 * and displays each contact along with the last message in their conversation.
 * 
 * @returns {JSX.Element} A JSX element containing the list of contacts.
 */
export const ContactsList = () => {
  const { contacts, conversations } = useSelector(chatSelector);
  return (
    <>
      {contacts.map((contact) => {
        if (contact.id === 0) {
          return null;
        }

        /**
         * Finds the conversation associated with the current contact.
         * It checks whether the conversation is of type "individual" or "group"
         * and matches the contact's ID accordingly.
         * 
         * @param {Object} conversations - The conversation object from the Redux store.
         * @returns {boolean} True if the conversation matches the contact, otherwise false.
         */
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
