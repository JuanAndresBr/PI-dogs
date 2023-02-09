import "./App.css";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Details from "./components/Details/Details";
import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs, getByRace, getTemperaments, orderByAlphabet, orderByWeight } from "./Redux/actions";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const dogs = useSelector((s) => s.allDogs);

  useEffect(() => {
    dispatch(getTemperaments());
    allDogs();
  }, []);

  function allDogs() {
    dispatch(getAllDogs());
  }

  function onSearch(race) {
    dispatch(getByRace(race));
  }
  function filters(name, value){
    if(name==="Alphabetic"){
      dispatch(orderByAlphabet(value))
    }else if (name==="Weight"){
      dispatch(orderByWeight(value))
    }
  }
  return (
    <div className="container">
      {useLocation().pathname === "/" ? null : <Nav allDogs={allDogs} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<Home onSearch={onSearch} dogs={dogs} filters={filters} />}
        />
        <Route path="/create" element={<Form />} />

        <Route path="/details/:detailID" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
