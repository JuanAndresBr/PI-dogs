import styles from "./Home.module.css";
import Page from "../Page/Page";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Order from "../Order/Order";
import Filter from "../Filter/Filter";
import React, { useState } from "react";

export default function Home(props) {
  const {
    dogs,
    onSearch,
    orders,
    filters,
    dogsPerPage,
    currentDogs,
    paginate,
    currentPage,
    allDogs
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <SearchBar onSearch={onSearch} paginate={paginate} />
        <Pagination
          dogsPerPage={dogsPerPage}
          totalDogs={dogs.length}
          paginate={paginate}
          currentPage={currentPage}
          allDogs={allDogs}
        />
        <hr />
      </div>
      <div className={styles.box}>
        <div className={styles.filters}>
          <Filter filters={filters} />
        </div>
        <div  className={styles.page} >
          <Page dogs={currentDogs} />
        </div>
        <div  className={styles.order}>
          <Order orders={orders} />
        </div>
      </div>
      <hr />
    </div>
  );
}
