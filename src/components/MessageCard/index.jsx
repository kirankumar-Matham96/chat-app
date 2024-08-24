import { useSelector } from "react-redux";
import { chatSelector } from "../../redux/reducers/chatSlice";
import messageCardStyles from "./index.module.css";

/**
 * A functional component that represents a message card in the chat application.
 * It displays messages either from the current user or from other users, with appropriate
 * styling and formatting depending on whether the message is sent by the current user or
 * by someone else.
 * 
 * @param {Object} props - The props object.
 * @param {Object} props.message - The message object containing details of the message.
 * @param {string} props.message.sender - The sender of the message.
 * @param {string} props.message.text - The text content of the message.
 * @param {Object} props.message.timestamp - The timestamp object containing date and time of the message.
 * @param {string} props.messageType - The type of the message, either "group" or "individual".
 * 
 * @returns {JSX.Element} A JSX element representing the message card in the chat.
 */
export const MessageCard = ({ message, messageType }) => {
  const { sender, text, timestamp } = message;
  const { contacts } = useSelector(chatSelector);

  /**
   * Finds the contact that matches the sender's name from the list of contacts.
   * 
   * @returns {Object|undefined} The contact object if a match is found, otherwise undefined.
   */ 
  const currentContact = contacts.find((contact) => {
    console.log("contact.name => ", contact.name);
    console.log("sender => ", sender);
    if (contact.name === sender) {
      return true;
    }
    return false;
  });

  const avatar = currentContact && currentContact.imgUrl;
  return (
    <div
      className={
        sender === "You"
          ? messageCardStyles.alignRight
          : messageCardStyles.bgContainer
      }
    >
      {sender === "You" ? (
        <div className={messageCardStyles.selfMessageContainer}>
          <div className={messageCardStyles.dataContainerSelf}>
            <span className={messageCardStyles.message}>{text}</span>
          </div>
          <span className={messageCardStyles.timeStamp}>{timestamp.time}</span>
        </div>
      ) : (
        <div className={messageCardStyles.otherMessageContainer}>
          {messageType === "group" && (
            <img
              className={messageCardStyles.avatar}
              src={avatar}
              alt={sender}
            />
          )}
          <div className={messageCardStyles.dataContainerOther}>
            <div className={messageCardStyles.senderMessageContainer}>
              {messageType === "group" ? (
                <span className={messageCardStyles.sender}>{sender}</span>
              ) : null}
              <span className={messageCardStyles.message}>{text}</span>
            </div>
            <div>
              <span className={messageCardStyles.timeStamp}>
                {timestamp.time}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
