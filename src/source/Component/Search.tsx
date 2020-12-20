import React, { Component, useState } from "react";
import { GETWEATHERAPI } from "../Network/GetServer";

interface Props {
  searchingCountry: Function;
}

const Search: React.FC<Props> = (props) => {
  const [query, setQuery] = useState("");

  const search = (evt: any) => {
    if (evt.key === "Enter") {
      GETWEATHERAPI(query).then((response) => {
        try {
          if (response.cod == 404) {
            setQuery("");
            console.log(response.message);
          } else {
            setQuery("");
            props.searchingCountry(response);
          }
        } catch (e) {
          console.log(e);
        }
      });
    }
  };

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
    </div>
  );
};

export default Search;
