import { POST_DOG, GET_ALL_DOGS, GET_BY_RACE, GET_TEMPERAMENTS } from "./action_type";
const initialState={
  allDogs:[],
  temperaments:[]
}
export default function rootReducer(state= initialState, {type,payload}){
  switch(type){
    case GET_ALL_DOGS:
      const allDogs=payload.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
      return {...state, allDogs:allDogs}
    case GET_BY_RACE:
      const allDogsByRace=payload.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
      return {...state, allDogs:allDogsByRace}
    case GET_TEMPERAMENTS:
      
      return {...state, temperaments: payload}
    default:
      return state
  }
}