import React from "react";
import contactStyles from "./index.module.css";

export const Contact = () => {
  return (
    <div className={contactStyles.bgContainer}>
      <div className={contactStyles.profilePic}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
          alt="user"
        />
      </div>
      <div className={contactStyles.contactDataContainer}>
        <div className={contactStyles.contactData}>
          <span>Me From Home</span>
          <span>How are you?</span>
        </div>
        <div className={contactStyles.dateContainer}>
          <span>yesterday</span>
        </div>
      </div>
    </div>
  );
};
