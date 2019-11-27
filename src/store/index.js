import { createStore, combineReducers } from "redux";

import { cursoReducer } from "./ducks/cursos";

export default createStore(combineReducers({ cursoReducer }));
