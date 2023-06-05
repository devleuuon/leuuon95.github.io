import React, {useState} from "react";
import { GoSearch } from 'react-icons/go'
import './SearchBar.css'

function SearchBar () {

  const [searchValue, setSearchValue] = useState('')

  return (
        <form className="search-bar">
        <input type="search"
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
        />
        { searchValue }
        <button type="submit" className="search__button">
          <GoSearch/>
        </button>
        </form>
  );
}

export default SearchBar;