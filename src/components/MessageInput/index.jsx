import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../redux/reducers/chatSlice";
import messageInputStyles from "./index.module.css";

export const MessageInput = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const changeInputHandle = (e) => {
    setInputText(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(sendMessage(inputText));
    setInputText("");
  };

  return (
    <div className={messageInputStyles.bgContainer}>
      <form className={messageInputStyles.form} onSubmit={submitHandle}>
        <input
          className={messageInputStyles.input}
          type="text"
          value={inputText}
          onChange={changeInputHandle}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};
