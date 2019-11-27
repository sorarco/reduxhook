import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cursoReducer } from "./ducks/cursos";
import { gitHubReducer } from "./ducks/github";

const middlewares = [thunk];

export default createStore(combineReducers({ cursoReducer, gitHubReducer }), applyMiddleware(...middlewares));
