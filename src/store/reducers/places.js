import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

const initialSatate = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialSatate, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: prevState.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri:
              "https://cdn.muenchen-p.de/.imaging/stk/responsive/galleryLarge/dms/shutterstock/neues-rathaus-marienplatz/document/neues-rathaus-marienplatz.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;