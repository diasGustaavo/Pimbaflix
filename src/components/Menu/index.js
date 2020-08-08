import React from 'react';
import logo from '../../assets/logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img class="Logo" src={logo} alt="Pimbaflix logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Nova pimbada
            </ButtonLink>
        </nav>
    );
}

export default Menu;