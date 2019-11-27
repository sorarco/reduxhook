import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../routes/history";
import { cursoReducer } from "../store/ducks/cursos";
import { gitHubReducer } from "../store/ducks/github";

export default combineReducers({
    router: connectRouter(history),
    cursoReducer,
    gitHubReducer
});
