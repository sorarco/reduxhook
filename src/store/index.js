import { createStore } from "redux";

const INITAL_STATE = {
    cursos: [
        'React com redux',
        'React com redux+hooks'
    ]
}

const appReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'CARREGAR_CURSOS':
            return { ...state, cursos: action.payload }
        default:
            return state;
    }
}

export default createStore(appReducer);