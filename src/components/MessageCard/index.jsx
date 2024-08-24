import { useSelector } from "react-redux";
import { chatSelector } from "../../redux/reducers/chatSlice";
import messageCardStyles from "./index.module.css";

export const MessageCard = ({ message, messageType }) => {
  const { sender, text, timestamp } = message;
  const { contacts } = useSelector(chatSelector);
  const currentContact = contacts.find((contact) => contact.name === sender);
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
            <span className={messageCardStyles.timeStamp}>
              {timestamp.time}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
