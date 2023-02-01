import styles from "./Pagination.module.css";
import React, { useState} from "react";

export default function Pagination({ dogsPerPage, totalDogs, paginate }) {
  const pageNumbers = [];
  const [numPage, setNumPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  function handleBack(){
    if(numPage-1>0){

      const num = numPage-1
      setNumPage(num)
      paginate(num)
    }
  }
  function handleForward(){
    if(numPage+1<=pageNumbers.length){

      const num = numPage+1
      setNumPage(num)
      paginate(num)
    }
  }
  return (
    <div className={styles.pagination}>
      <a onClick={handleBack} href="#">&laquo;</a>
      {pageNumbers.map((number) => {
        return numPage === number ? (
          <a
            href="#"
            key={number}
            className={styles.active}
            onClick={() => {
              setNumPage(number);
              paginate(number);
            }}
          >
            {number}
          </a>
        ) : (
          <a
            href="#"
            key={number}
            onClick={() => {
              setNumPage(number);
              paginate(number);
            }}
          >
            {number}
          </a>
        );
      })}
      <a onClick={handleForward} href="#">&raquo;</a>
    </div>
  );
}
