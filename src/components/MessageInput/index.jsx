import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../redux/reducers/chatSlice";
import messageInputStyles from "./index.module.css";

/**
 * A functional component that represents the input field for sending messages in the chat application.
 * It handles user input, dispatches the message to the store, and resets the input field after submission.
 *
 * @returns {JSX.Element} A JSX element representing the message input field.
 */
export const MessageInput = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  /**
   * Handles changes in the input field by updating the component's state with the new value.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object representing the change event in the input field.
   */
  const changeInputHandle = (e) => {
    setInputText(e.target.value);
  };

  /**
   * Handles the submission of the message form. Prevents the default form submission behavior,
   * dispatches the message to the Redux store, and clears the input field.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The event object representing the form submission event.
   */
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
