import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { chatSelector, filterContacts } from "../../redux/reducers/chatSlice";
import searchBoxStyles from "./index.module.css";

export const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef();
  const { searchTerm: search } = useSelector(chatSelector);
  const dispatch = useDispatch();

  const onChangeHandle = () => {
    setSearchTerm(searchRef.current.value);
  };

  useEffect(() => {
    searchRef.current.value = search;
  }, []);

  useEffect(() => {
    searchRef.current.value = search;
  }, [search]);

  useEffect(() => {
    dispatch(filterContacts(searchTerm));
  }, [searchTerm]);

  return (
    <div className={searchBoxStyles.bgContainer}>
      <div className={searchBoxStyles.iconContainer}>
        <FaSearch />
      </div>
      <input
        type="search"
        placeholder="Search"
        ref={searchRef}
        onChange={onChangeHandle}
      />
    </div>
  );
};
