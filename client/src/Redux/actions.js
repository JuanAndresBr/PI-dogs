import {
  POST_DOG,
  GET_ALL_DOGS,
  GET_BY_RACE,
  GET_TEMPERAMENTS,
  ORDER_BY_ALPHABET,
  ORDER_BY_WEIGHT,
  FILTER_BY_RACE,
  FILTER_BY_TEMPERAMENT,
  SEARCH_TEMPERAMENT,
  SEARCH_RACE,
  DETAILS,
} from "./action_type";
import axios from "axios";

export function details(detailID) {
  return async function (dispatch) {
    const result = await axios.get(`http://localhost:3001/dogs/${detailID}`);
    const dog = result.data;
    dispatch({ type: DETAILS, payload: dog });
  };
}

export function searchRace(value) {
  return {
    type: SEARCH_RACE,
    payload: value,
  };
}

export function searchTemperament(value) {
  return {
    type: SEARCH_TEMPERAMENT,
    payload: value,
  };
}

export function filterByRace(value) {
  return {
    type: FILTER_BY_RACE,
    payload: value,
  };
}
export function filterByTemperament(value) {
  return {
    type: FILTER_BY_TEMPERAMENT,
    payload: value,
  };
}
export function orderByAlphabet(value) {
  return {
    type: ORDER_BY_ALPHABET,
    payload: value,
  };
}
export function orderByWeight(value) {
  return {
    type: ORDER_BY_WEIGHT,
    payload: value,
  };
}
export function postDog(dog) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/dogs", dog)
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: POST_DOG,
          payload: data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
export function getAllDogs() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/dogs")
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: GET_ALL_DOGS,
          payload: data,
        });
      });
  };
}
export function getByRace(race) {
  return async function (dispatch) {
    const result = await axios.get(`http://localhost:3001/dogs?name=${race}`);
    const data = result.data;
    dispatch({
      type: GET_BY_RACE,
      payload: data,
    });
  };
}
export function getTemperaments() {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/temperaments");
    const temperaments = data.data;
    dispatch({
      type: GET_TEMPERAMENTS,
      payload: temperaments,
    });
  };
}
