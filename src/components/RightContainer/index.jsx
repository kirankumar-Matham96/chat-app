import React, { useEffect } from "react";
import { MessageCard } from "../MessageCard";
import { MessageInput } from "../MessageInput";
import { useSelector } from "react-redux";
import { chatSelector } from "../../redux/reducers/chatSlice";
import rightContainerStyles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export const RightContainer = () => {
  const navigate = useNavigate();
  const { currentContact, currentConversation, contacts } =
    useSelector(chatSelector);

  useEffect(() => {
    if (currentContact === null || currentConversation === null) {
      navigate("/");
    }
  }, [navigate]);

  let members = null;
  members =
    currentConversation &&
    currentConversation.type === "group" &&
    currentConversation.members
      .map((member) => contacts.find((contact) => contact.id === member.id))
      .filter((member) => member);

  return (
    <div className={rightContainerStyles.bgContainer}>
      {currentContact && currentConversation && (
        <>
          <div className={rightContainerStyles.mainContainer}>
            <div className={rightContainerStyles.mainChatHeader}>
              <div className={rightContainerStyles.headerImage}>
                <img src={currentContact.imgUrl} alt={currentContact.name} />
              </div>
              <div className={rightContainerStyles.headerTextContainer}>
                <p className={rightContainerStyles.groupName}>
                  {currentContact.name}
                </p>
                {members && (
                  <p className={rightContainerStyles.groupMembersList}>
                    {members.map((member, index) => (
                      <span key={member.id}>
                        {index === 0 ? "" : ", "}
                        {member.name}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
            <div className={rightContainerStyles.mainChatBody}>
              {currentConversation.messages.map((message) => (
                <MessageCard
                  key={message.id}
                  message={message}
                  messageType={currentConversation.type}
                />
              ))}
            </div>
          </div>
          <div className={rightContainerStyles.inputContainer}>
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};
