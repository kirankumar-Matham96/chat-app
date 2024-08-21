import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import searchBoxStyles from "./index.module.css";

export const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeHandle = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={searchBoxStyles.bgContainer}>
      <div className={searchBoxStyles.iconContainer}>
        <FaSearch />
      </div>
      <input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={onChangeHandle}
      />
    </div>
  );
};
