import React, { useState } from "react";
import { useNavigate } from "react-router";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function searchQuery(event: React.FormEvent): void {
    event.preventDefault();
    navigate(`/items?search=${query}`);
  }

  return (
    <form className="search-box-form" role="search" onSubmit={searchQuery}>
      <input
        type="text"
        className="search-box-input"
        aria-label="Ingresá lo que quieras encontrar"
        placeholder="Nunca dejes de buscar"
        maxLength={120}
        tabIndex={2}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="submit" className="search-box-btn" tabIndex={3} />
    </form>
  );
}

export default SearchBar;