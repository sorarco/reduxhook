import React from 'react';
import { useSelector } from 'react-redux';
const Cursos = () => {
    const cursos = useSelector(state => state.cursos);
    return (
        <ul>
            <li>#1</li>
            <li>#2</li>
            {cursos.map((curso, key) => <li key={key}>{curso}</li>)}

        </ul>
    );
};

export default Cursos;