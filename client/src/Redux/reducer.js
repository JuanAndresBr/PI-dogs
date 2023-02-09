import {
  GET_ALL_DOGS,
  GET_BY_RACE,
  GET_TEMPERAMENTS,
  ORDER_BY_ALPHABET,
  ORDER_BY_WEIGHT,
} from "./action_type";
const initialState = {
  allDogs: [],
  temperaments: [],
};
export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_DOGS:
      // const allDogs=payload.sort((a, b) => {
      //   if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      //   if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      //   return 0;
      // })
      return { ...state, allDogs: payload };
    case GET_BY_RACE:
      // const allDogsByRace=payload.sort((a, b) => {
      //   if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      //   if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      //   return 0;
      // })
      return { ...state, allDogs: payload };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: payload };
    case ORDER_BY_ALPHABET:
      const copy=[...state.allDogs]
      const ordered = copy.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
      if (payload === "Ascendent") {
        console.log(ordered)
        return { ...state, allDogs: ordered };
      } else if(payload === "Descendent") {
        console.log(ordered)
        return { ...state, allDogs: ordered.reverse() };
      }
    case ORDER_BY_WEIGHT: {
      const copy=[...state.allDogs]
      const ordered = copy.sort((a, b) => {
        const weightA = a.weight.split(" - ");
        const valueA = (Number(weightA[0]) + Number(weightA[1])) / 2;
        const weightB = b.weight.split(" - ");
        const valueB = (Number(weightB[0]) + Number(weightB[1])) / 2;
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      });
      if(payload === "Ascendent"){
        return {...state, allDogs: ordered}
      }else if (payload==="Descendent"){
        return {...state, allDogs: ordered.reverse()}
      }
    }
    default:
      return state;
  }
}
