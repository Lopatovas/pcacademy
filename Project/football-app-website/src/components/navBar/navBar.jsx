import React from 'react'

export default function NavBar(props) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Home</a>
            <ul className='navbar-nav'>
                <li className="nav-item">
                    <a className="nav-link" href="/">Teams</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Players</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/">Register</a>
                        <a className="dropdown-item" href="/">Login</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}