import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    let links = ['Projects', 'Experience', 'Lists', 'Contact'];
    return (
        <header id="header">
            <h1 className="index-link"><Link to='/'>Spencer Paul</Link></h1>
            <nav className="links">
                <ul>
                    {links.map(l => (
                        <li key={l}>
                            <Link to={'/' + l}>{l}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;