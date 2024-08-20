import { useState } from "react";
import searchBoxStyles from "./index.module.css";

export const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeHandle = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={searchBoxStyles.bgContainer}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/8915/8915520.png"
        alt="search"
      />
      <input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={onChangeHandle}
      />
    </div>
  );
};
