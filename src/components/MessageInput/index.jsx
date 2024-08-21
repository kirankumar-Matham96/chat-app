import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import messageInputStyles from "./index.module.css";

export const MessageInput = () => {
  const [inputText, setInputText] = useState("");

  const changeInputHandle = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className={messageInputStyles.bgContainer}>
      <form className={messageInputStyles.form}>
        <input
          className={messageInputStyles.input}
          type="text"
          value={inputText}
          onChange={changeInputHandle}
        />
        <button>
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};
