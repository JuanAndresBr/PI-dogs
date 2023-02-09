import styles from "./Pagination.module.css";
import React, { useState, useEffect } from "react";

export default function Pagination({ dogsPerPage, totalDogs, paginate }) {
  const pageNumbers = [];
  const [numPage, setNumPage] = useState(1);
  const [input, setInput] = useState(numPage);

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    setInput(1);
    setNumPage(1);
    paginate(1);
  }, [totalDogs]);
  const handleInputChange = (e) => {
    if (e.target.value > 0 && e.target.value <= pageNumbers.length) {
      setInput(e.target.value);
      setNumPage(e.target.value);
      paginate(e.target.value);
    } else {
      setInput(e.target.value);
      setNumPage(1);
      paginate(1);
    }
  };

  function handleBack() {
    if (numPage - 1 > 0) {
      const num = numPage - 1;
      setNumPage(num);
      setInput(num);
      paginate(num);
    }
  }
  function handleForward() {
    if (numPage + 1 <= pageNumbers.length) {
      const num = numPage + 1;
      setNumPage(num);
      setInput(num);
      paginate(num);
    }
  }
  return (
    <div className={styles.pagination}>
      <p onClick={handleBack}>&laquo;</p>
      <input
        onChange={(e) => {
          handleInputChange(e);
        }}
        value={input}
      ></input>
      {/* <h1>/{pageNumbers.length}</h1> */}

      <input value={"/" + pageNumbers.length} readOnly></input>
      <p onClick={handleForward}>&raquo;</p>
    </div>
  );
}
