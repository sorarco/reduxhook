import React from 'react';
import { Link } from "react-router-dom";
const DetailPage = props => (
    <div>
        <h5>Detail Page</h5>
        <Link onClick={() => props.history.goBack()}>Voltar</Link>
    </div>
)

export default DetailPage;