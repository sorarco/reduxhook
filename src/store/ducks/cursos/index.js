import { CARREGAR_CURSOS, ADICIONAR_CURSO, EDIT_CURSO } from "./types";

//ACTIONS
export const edit = payload => {
  return {
    type: EDIT_CURSO,
    payload
  };
};

export const carregar = filtro => {
  return {
    type: CARREGAR_CURSOS,
    payload: ["React com hooks"]
  };
};

export const adicionar = curso => {
  return {
    type: ADICIONAR_CURSO,
    payload: curso
  };
};

// REDUCERS
const INITAL_STATE = {
  cursos: [],
  curso: ""
};

export const cursoReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EDIT_CURSO:
      return { ...state, curso: action.payload };
    case CARREGAR_CURSOS:
      return { ...state, cursos: action.payload };
    case ADICIONAR_CURSO:
      return { ...state, cursos: [...state.cursos, action.payload] };
    default:
      return state;
  }
};
