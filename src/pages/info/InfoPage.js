import React from 'react';
import { Link } from "react-router-dom";
const InfoPage = props => (
    <div>
        <h5>Info Component</h5>
        <br />
        <Link to="/detail">Detail</Link>
        <br />
        <Link onClick={() => props.history.goBack()}>Voltar</Link>
    </div>
)

export default InfoPage;