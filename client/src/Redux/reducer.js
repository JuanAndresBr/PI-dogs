import {
  GET_ALL_DOGS,
  GET_BY_BREED,
  GET_TEMPERAMENTS,
  ORDER_BY_ALPHABET,
  ORDER_BY_WEIGHT,
  FILTER_BY_TEMPERAMENT,
  SEARCH_TEMPERAMENT,
  SEARCH_BREED,
  DETAILS,
  FILTER_BY_BREED,
} from "./action_type";
const initialState = {
  allDogs: [],
  dogs: [],
  temperaments: [],
  allTemperaments: [],
  breeds: [],
  dogDetails: {},
};
export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DETAILS:
      return { ...state, dogDetails: payload };
    case SEARCH_BREED:
      if (payload === "") return { ...state, breeds: state.allDogs };
      const breed = state.allDogs.filter((e) =>
        e.name.toLowerCase().includes(payload.toLowerCase())
      );
      return { ...state, breeds: breed };
    case SEARCH_TEMPERAMENT:
      if (payload === "")
        return { ...state, temperaments: state.allTemperaments };

      const temp = state.allTemperaments.filter((e) =>
        e.name.toLowerCase().includes(payload.toLowerCase())
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
    case FILTER_BY_BREED:
      if (payload.length === 0) {
        return { ...state, dogs: state.allDogs };
      }
      const filterBreed = state.allDogs.filter((e) => payload.includes(e.name));
      return { ...state, dogs: filterBreed };
    case GET_ALL_DOGS:
      return { ...state, allDogs: payload, dogs: payload, breeds: payload };
    case GET_BY_BREED:
      return { ...state, dogs: payload };
    case GET_TEMPERAMENTS:
      return { ...state, allTemperaments: payload, temperaments: payload };
    case ORDER_BY_ALPHABET:
      const copy = [...state.dogs];
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
      return state;
    case ORDER_BY_WEIGHT:
      const copyWeight = [...state.dogs];
      const orderedWeight = copyWeight.sort((a, b) => {
        const weightA = a.weight.split(" - ");
        const valueA =
          (Number(weightA[0]) ? Number(weightA[0]) : 0) +
          (Number(weightA[1]) ? Number(weightA[1]) : 0);
        const weightB = b.weight.split(" - ");
        const valueB =
          (Number(weightB[0]) ? Number(weightB[0]) : 0) +
          (Number(weightB[1]) ? Number(weightB[1]) : 0);
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      });
      if (payload === "Ascendent") {
        return { ...state, dogs: orderedWeight };
      } else if (payload === "Descendent") {
        return { ...state, dogs: orderedWeight.reverse() };
      }
      return state;
    default:
      return state;
  }
}
