import styles from "./Pagination.module.css";
import React, { useState } from "react";

export default function Pagination({
  dogsPerPage,
  totalDogs,
  paginate,
  currentPage,
  allDogs,
}) {
  const pageNumbers = [];
  const [numPage, setNumPage] = useState(currentPage);
  const [input, setInput] = useState(numPage);

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.value >= 0 && e.target.value <= pageNumbers.length) {
      setInput(e.target.value);
      setNumPage(e.target.value);
      paginate(e.target.value);
    } else {
      setInput(1);
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
    } else {
      setNumPage(pageNumbers.length);
      setInput(pageNumbers.length);
      paginate(pageNumbers.length);
    }
  }
  function handleForward() {
    if (Number(numPage) + 1 <= pageNumbers.length) {
      const num = Number(numPage) + 1;
      setNumPage(num);
      setInput(num);
      paginate(num);
    } else {
      setNumPage(1);
      setInput(1);
      paginate(1);
    }
  }
  function handleReset() {
    setNumPage(1);
    setInput(1);
    paginate(1);
    allDogs();
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
      <input value={"/" + pageNumbers.length} readOnly></input>
      <p onClick={handleForward}>&raquo;</p>
      <p onClick={handleReset}>⭯</p>
    </div>
  );
}
