// function that returns an action type and a text value
export function increase(){
  return {
    type: "INCREASE_COUNT",
  }
}

export function decrease(){
  return {
    type: "DECREASE_COUNT",
  }
}

export function setSpecialText(text){
  return {
    type: "SPECIAL_TEXT",
    payload: text
  }
}

export function searchText(text){
  return {
    type: "SEARCH_TEXT",
    payload: text
  }
}

export function users(user){
  return {
    type: "SET_USER",
    payload: user
  }
}

export function setCurrentCity(city){
  return {
    type: "CURRENT_CITY",
    payload: city
  }
}

export function changeThermostat(value){
  return {
    type: "CHANGE_THERMOSTAT",
    payload: value
  }
}

export function showModal(value){
  return {
    type: "SHOW_MODAL",
    payload: value
  }
}