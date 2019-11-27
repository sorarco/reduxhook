import { CARREGAR_SEGUIDORES, STATUS_CARREGAR_SEGUIDORES } from "./types";
import axios from "axios";

//ACTIONS

export const carregarSeguidores = () => {
    return async dispatch => {
        dispatch({
            type: STATUS_CARREGAR_SEGUIDORES,
            payload: true
        });

        const resp = await axios.get('https://api.github.com/users/octocat/followers');
        dispatch({
            type: CARREGAR_SEGUIDORES,
            payload: resp.data
        })

        dispatch({
            type: STATUS_CARREGAR_SEGUIDORES,
            payload: false
        });
    }
};

// REDUCERS
const INITAL_STATE = {
    seguidores: [],
    statusCarregar: false
};

export const gitHubReducer = (state = INITAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case CARREGAR_SEGUIDORES:
            return { ...state, seguidores: action.payload }
        case STATUS_CARREGAR_SEGUIDORES:
            return { ...state, statusCarregar: action.payload }
        default:
            return state;
    }
};
