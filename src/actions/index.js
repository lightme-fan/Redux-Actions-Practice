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

export function hideModal(value){
  return {
    type: "HIDE_MODAL",
    payload: value
  }
}

export function addImageUrl(image){
  return {
    type: "ADD_IMAGE_URL",
    payload: image
  }
}

export function imageScale(image){
  return {
    type: "ADD_SCALE",
    payload: image
  }
}

export function addUserButton(user){
  return {
    type: "ADD_USER_BUTTON",
    payload: user
  }
}

export function removeUserButton(user){
  return {
    type: "REMOVE_USER_BUTTON",
    payload: user
  }
}

export function sortUser(user){
  return {
    type: "SORT_USER",
    payload: user
  }
}