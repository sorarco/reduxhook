import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { carregar, adicionar, edit } from "../../store/ducks/cursos";
import { carregarSeguidores } from "../../store/ducks/github";
import List from "../list";

export default () => {
  const dispatch = useDispatch();
  const cursos = useSelector(state => state.cursoReducer.cursos);
  const statusCarregarSeguidores = useSelector(state => state.gitHubReducer.statusCarregar);
  const seguidores = useSelector(state => state.gitHubReducer.seguidores);
  const curso = useSelector(state => state.cursoReducer.curso);
  // if (cursos.length == 0) {
  //   dispatch(carregar());
  // }
  // if (seguidores.length == 0) {
  //   dispatch(carregarSeguidores());
  // }
  useEffect(() => {
    dispatch(carregar());
    dispatch(carregarSeguidores());
  }, [dispatch]);

  const salvar = event => {
    event.preventDefault();
    dispatch(adicionar(curso));
    dispatch(edit(""));
  };

  const _renderSeguidores = () => {
    if (statusCarregarSeguidores) {
      return <>Carregando...</>
    }
    return (
      <ul>
        {seguidores.map((item, key) => (
          <li key={item.id}>{item.login}</li>
        ))}
      </ul>
    )
  }

  return (
    <>
      {_renderSeguidores()}
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
