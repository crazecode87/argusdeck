"use client";
import * as React from "react";
import PropTypes from 'prop-types';

export function Search({ searchQuery, onSearchChange }) {
  return (
    <div className="relative">
      <input
        className="px-4 py-3 pl-12 w-full text-base text-white rounded-lg border border-solid bg-white bg-opacity-10 border-white border-opacity-20"
        type="text"
        placeholder="Search stocks..."
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
      />
      <span className="absolute left-4 top-2/4 -translate-y-2/4 text-neutral-400">
        🔍
      </span>
    </div>
  );
}

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
};