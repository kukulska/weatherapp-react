import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search" id="search-form">
      <div>
        <div className="input-group">
          <input
            type="search"
            placeholder="Type a city..."
            autofocus="on"
            autocomplete="off"
            className="form-control shadow-sm"
            id="city-input"
          />
          <div className="input-group-append" id="button-addon4">
            <button
              type="submit"
              className="btn btn-light shadow-sm btn-outline-secondary"
            >
              Search
            </button>
            <button
              type="button"
              className="btn btn-light shadow-sm btn-outline-secondary"
              id="current-location"
            >
              Current
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
