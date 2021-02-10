import { combineReducers } from "redux";

// incomplete reducer function that checks an action prop type to detemine a counter number
function currentCount(state=0, action){
  switch (action.type) {
    case "INCREASE_COUNT":
      return state + 1
    case "DECREASE_COUNT":
      return state - 1
    default:
      return state;
  }
}

// incomplete reducer function that should check an action prop type to return an array of users
function users(state =[], action){
  switch (action.type) {
    case "SET_USER":
      return [...state, action.payload]
    
      case "ADD_USER_BUTTON": {
        return [...state, action.payload]
      }

      case "REMOVE_USER_BUTTON": {
        console.log(action.payload);
        const sliced = state.slice(0, state.length - 1)
        const filtered = state.filter(item => item !== action.payload);
        console.log(filtered);
        return sliced
      }
      case "GET_USERS":
      return action.value
    default:
      return state
  }
}

function currentCity(state="", action){
  switch (action.type) {
    case "CURRENT_CITY":
      return action.payload
    default:
      return state;
  }
}

function currentTemp(state=0, action){
  switch (action.type) {
    case "CHANGE_THERMOSTAT":
      return action.payload
  
    default:
      return state;
  }
}

function displayModal(state=false, action){
  switch (action.type) {
    case "SHOW_MODAL":
      return action.payload = true
    case "HIDE_MODAL":
      return action.payload = false
    default:
      return state;
  }
}

function imageUrl(state="", action){
  switch (action.type) {
    case "ADD_IMAGE_URL":
      return action.payload
    default:
      return state
  }
}

function currentUserSort(state="first_name", action){
  switch (action.type) {
    case "SORT_USER":
      return action.payload
    default:
      return state
  }
}

function imageScale(state=1, action){
  switch (action.type) {
    case "ADD_SCALE":
        return action.payload
    default:
      return state
  }
}

function searchText(state= "", action){
  switch (action.type) {
    case "SEARCH_TEXT":
        return action.payload
    default:
      return state;
  }
}

// complete reducer function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value
function specialText(state= "", action){
  switch (action.type) {
    case "SPECIAL_TEXT":
      return action.payload
    default:
      return state;
  }
}

export default combineReducers({
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  displayModal,
  imageUrl,
  currentUserSort,
  imageScale,
  users
});
