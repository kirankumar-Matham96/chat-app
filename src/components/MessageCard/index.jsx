import messageCardStyles from "./index.module.css";

export const MessageCard = ({ message, loading }) => {
  const { sender, text, timestamp } = message;
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
          <p className={messageCardStyles.message}>{text}</p>
          <span className={messageCardStyles.timeStamp}>
            {loading ? "... " : timestamp}
          </span>
        </div>
      ) : (
        <div className={messageCardStyles.otherMessageContainer}>
          <p className={messageCardStyles.message}>{text}</p>
          <span className={messageCardStyles.timeStamp}>
            {loading ? "... " : timestamp}
          </span>
        </div>
      )}
    </div>
  );
};
