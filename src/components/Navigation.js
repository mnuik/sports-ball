import './components.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div class="topnav">
            <Link to="/">Home</Link>
            <Link to="/arsenal">Arsenal</Link>
            <Link to="/finland">Finland</Link>
            <Link to="/minnesota">Minnesota</Link>
            <Link to="/other-sports">Other Sports</Link>
            <Link to="/tables-scores">Tables</Link>
            <Link to="/viljar">Viljar</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Tables</Link>
        </div>
        // <div class="topnav">
        //     <a href="#sports">Sports</a>
        //     <a href="#tables">Tables</a>
        //     <a href="#finland">Finland NTs</a>
        //     <a href="#estonia">Estonia NTs</a>
        //     <a href="#arsenal">Arsenal</a>
        //     <a href="#manu">ManU</a>
        // </div>
    )
}

export default Navigation;