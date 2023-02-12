import {
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
const initialState = {
  allDogs: [],
  dogs: [],
  temperaments: [],
  allTemperaments: [],
  races: [],
  dogDetails: {},
};
export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DETAILS:
      return { ...state, dogDetails: payload };
    case SEARCH_RACE:
      if (payload === "") return { ...state, races: state.allDogs };
      const race = state.allDogs.filter((e) =>
        e.name.toLowerCase().includes(payload.toLowerCase())
      );
      return { ...state, races: race };
    case SEARCH_TEMPERAMENT:
      if (payload === "") {
        return { ...state, temperaments: state.allTemperaments };
      }
      const temp = state.allTemperaments.filter((e) =>
        e.nombre.toLowerCase().includes(payload.toLowerCase())
      );
      return { ...state, temperaments: temp };
    case FILTER_BY_TEMPERAMENT:
      let filterTemperament = [];
      if (payload.length === 0) {
        return { ...state, dogs: state.allDogs };
      }
      state.allDogs.forEach((dog) => {
        if (dog.temperament) {
          let cont = 0;
          payload.forEach((e) => {
            if (dog.temperament.includes(e)) {
              cont++;
            }
          });
          if (cont === payload.length) {
            filterTemperament.push(dog);
          }
        } else {
          return false;
        }
      });
      filterTemperament = filterTemperament.filter(
        (e, i) => filterTemperament.indexOf(e) === i
      );
      return { ...state, dogs: filterTemperament };
    case FILTER_BY_RACE:
      if (payload.length === 0) {
        return { ...state, dogs: state.allDogs };
      }
      const filterRace = state.allDogs.filter((e) => payload.includes(e.name));
      return { ...state, dogs: filterRace };
    case GET_ALL_DOGS:
      return { ...state, allDogs: payload, dogs: payload, races: payload };
    case GET_BY_RACE:
      return { ...state, dogs: payload };
    case GET_TEMPERAMENTS:
      return { ...state, allTemperaments: payload, temperaments: payload };
    case ORDER_BY_ALPHABET:
      const copy = [...state.allDogs];
      const ordered = copy.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
      if (payload === "Ascendent") {
        return { ...state, dogs: ordered };
      } else if (payload === "Descendent") {
        return { ...state, dogs: ordered.reverse() };
      }
    case ORDER_BY_WEIGHT: {
      const copy = [...state.allDogs];
      const ordered = copy.sort((a, b) => {
        const weightA = a.weight.split(" - ");
        const valueA = (Number(weightA[0]) + Number(weightA[1])) / 2;
        const weightB = b.weight.split(" - ");
        const valueB = (Number(weightB[0]) + Number(weightB[1])) / 2;
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      });
      if (payload === "Ascendent") {
        return { ...state, dogs: ordered };
      } else if (payload === "Descendent") {
        return { ...state, dogs: ordered.reverse() };
      }
    }
    default:
      return state;
  }
}
