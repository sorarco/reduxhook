import React from 'react';
import { Link } from "react-router-dom";
const IndexPage = props => (
    <div>
        <h5>Index page</h5>
        <br />
        <Link to="/info">Info</Link>
    </div>
)

export default IndexPage;