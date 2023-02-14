import "./App.css";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Details from "./components/Details/Details";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllDogs,
  getByBreed,
  getTemperaments,
  orderByAlphabet,
  orderByWeight,
  filterByBreed,
  filterByTemperament,
} from "./Redux/actions";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const dogs = useSelector((s) => s.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getTemperaments());
    allDogs();
  }, []);

  function allDogs() {
    dispatch(getAllDogs());
  }

  function onSearch(race) {
    dispatch(getByBreed(race));
  }
  function orders(name, value) {
    if (name === "Alphabetic") {
      dispatch(orderByAlphabet(value));
    } else if (name === "Weight") {
      dispatch(orderByWeight(value));
    }
  }
  function filters(name, value) {
    if (name === "Breeds") {
      dispatch(filterByBreed(value));
    } else if (name === "Temperaments") {
      dispatch(filterByTemperament(value));
    }
  }
  return (
    <div className="container">
      {useLocation().pathname === "/" ? null : <Nav allDogs={allDogs} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <Home
              currentPage={currentPage}
              dogsPerPage={dogsPerPage}
              currentDogs={currentDogs}
              paginate={paginate}
              onSearch={onSearch}
              dogs={dogs}
              orders={orders}
              filters={filters}
              allDogs={allDogs}
            />
          }
        />
        <Route path="/create" element={<Form />} />

        <Route path="/details/:detailID" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
