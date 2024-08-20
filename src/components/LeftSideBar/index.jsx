import React from "react";
import { SearchBox } from "../SearchBox";
import leftNavStyles from "./index.module.css";

export const LeftSideBar = () => {
  return (
    <div className={leftNavStyles.bgContainer}>
      <SearchBox />
    </div>
  );
};
