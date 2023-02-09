import styles from "./Home.module.css";
import Page from "../Page/Page";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import React, { useState } from "react";

export default function Home(props) {
  const { dogs, onSearch, filters } = props;
  const [currentPage, setcurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <SearchBar onSearch={onSearch} />
      <Pagination
        dogsPerPage={dogsPerPage}
        totalDogs={dogs.length}
        paginate={paginate}
      />
      <Filters filters={filters} />
      <Page dogs={currentDogs} />
    </div>
  );
}
