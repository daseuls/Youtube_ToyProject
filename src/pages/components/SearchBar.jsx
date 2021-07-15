import React from "react"

export default function SearchBar() {
  return (
    <div className="searchBarContainer">
      <header className="searchBarTitle">YOUTUBE</header>
      <input
        className="searchBarInput"
        placeholder="동영상을 검색하세요"
      ></input>
    </div>
  )
}
