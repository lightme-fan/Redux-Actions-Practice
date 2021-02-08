import {createStore} from 'redux';
import state from "./state";
import reducers from "./reducers/index";

let store = createStore(reducers,state);
store.subscribe(() => {
    store.getState()
})

export default store;