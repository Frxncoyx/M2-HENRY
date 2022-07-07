import React, { useState } from "react";
import "./Search.css";

export default function SearchBar({ onSearch }) {

  const [city, setCity] = useState('')
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  const input = document.getElementById("inputcity");
  return (
    <div className="btncontainer">
      <button className="btn btn-dark" onClick={myFunction}>Dark</button>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
        <input
          type="text"
          placeholder="Ciudad..." onChange={e => setCity(e.target.value)}
          id="inputcity"
        />
        <input type="submit" value="Agregar" onClick={() => input.value = ''} className="submit" />
      </form>
    </div>
  );
}


