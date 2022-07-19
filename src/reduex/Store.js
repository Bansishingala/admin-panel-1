import { createStore , applyMiddleware  } from "redux";
import { rootCounter } from "./reducer/Index";
import thunk from 'redux-thunk'

export const conFigureStore = () => {
    let store = createStore(rootCounter, applyMiddleware(thunk))    

    return store;
}