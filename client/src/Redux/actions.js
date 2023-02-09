import {
  POST_DOG,
  GET_ALL_DOGS,
  GET_BY_RACE,
  GET_TEMPERAMENTS,
  ORDER_BY_ALPHABET,
  ORDER_BY_WEIGHT
} from "./action_type";
import axios from "axios";

export function orderByAlphabet(value){
  return{
    type: ORDER_BY_ALPHABET,
    payload:value
  }
}
export function orderByWeight(value){
  return{
    type: ORDER_BY_WEIGHT,
    payload:value
  }
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
    const data = result.data
    //.sort((a, b) => {
    //   if (a.name < b.name) return -1;
    //   if (a.name > b.name) return 1;
    //   return 0;
    // });
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
