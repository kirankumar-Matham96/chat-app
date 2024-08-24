import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { chatSelector, filterContacts } from "../../redux/reducers/chatSlice";
import searchBoxStyles from "./index.module.css";

/**
 * A functional component that represents a search box for filtering contacts.
 * It includes an input field for entering search terms and dispatches actions
 * to filter contacts based on the entered search term.
 *
 * @returns {JSX.Element} A JSX element representing the search box.
 */
export const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef();
  const { searchTerm: search } = useSelector(chatSelector);
  const dispatch = useDispatch();

  /**
   * Handles the change event of the search input field.
   * Updates the `searchTerm` state with the current value of the input field.
   */
  const onChangeHandle = () => {
    setSearchTerm(searchRef.current.value);
  };

  /**
   * Effect hook that synchronizes the search input field with the `search` value
   * from the Redux store. Runs whenever `search` changes.
   */
  useEffect(() => {
    searchRef.current.value = search;
  }, [search]);

   /**
   * Effect hook that dispatches the `filterContacts` action with the current
   * `searchTerm` whenever `searchTerm` changes.
   */
  useEffect(() => {
    dispatch(filterContacts(searchTerm));
  }, [dispatch,searchTerm]);

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
