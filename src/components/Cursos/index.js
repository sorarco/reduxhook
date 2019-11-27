import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { carregar, adicionar, edit } from "../../store/ducks/cursos";
import List from "../list";

export default () => {
  const dispatch = useDispatch();
  const cursos = useSelector(state => state.cursoReducer.cursos);
  const curso = useSelector(state => state.cursoReducer.curso);
  if (cursos.length == 0) {
    dispatch(carregar());
  }
  const salvar = event => {
    event.preventDefault();
    dispatch(adicionar(curso));
    dispatch(edit(""));
  };
  return (
    <>
      <List data={cursos} />
      <input
        type="text"
        value={curso}
        onChange={e => dispatch(edit(e.target.value))}
      />
      <button onClick={e => salvar(e)}>salvar</button>
    </>
  );
};
