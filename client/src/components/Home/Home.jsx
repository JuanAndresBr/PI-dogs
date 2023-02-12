import styles from "./Home.module.css";
import Page from "../Page/Page";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Order from "../Order/Order";
import Filter from "../Filter/Filter";
import React, { useState } from "react";

export default function Home(props) {
  const { dogs, onSearch, orders, filters } = props;
  const [currentPage, setcurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <SearchBar onSearch={onSearch} />
        <Pagination
          dogsPerPage={dogsPerPage}
          totalDogs={dogs.length}
          paginate={paginate}
        />
        <hr />
      </div>
      <div className={styles.box}>
        <div>
          <Filter filters={filters} />
        </div>
        <div>
          <Page dogs={currentDogs} />
        </div>
        <div>
          <Order orders={orders} />
        </div>
      </div>
      <hr />
    </div>
  );
}
