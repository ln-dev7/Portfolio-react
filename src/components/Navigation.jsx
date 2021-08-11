import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover" activeClassName="nav-active">
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/a-propos" exact className="hover" activeClassName="nav-active">
                    <li>A Propos</li>
                </NavLink>
                <li className="nav-portfolio">Projets
                    <ul className="nav-projects">
                        <NavLink to="/livinnow" exact className="hover" activeClassName="nav-active">
                            <li>Livinnow</li>
                        </NavLink>
                        <NavLink to="/music-player" exact className="hover" activeClassName="nav-active">
                            <li>Lecteur de Musique</li>
                        </NavLink>
                        <NavLink to="/site-cook" exact className="hover" activeClassName="nav-active">
                            <li>Site de Restaurant</li>
                        </NavLink>
                        <NavLink to="/z-shop" exact className="hover" activeClassName="nav-active">
                            <li>Interface E-Commerce</li>
                        </NavLink>
                        <NavLink to="/card-hover-effect" exact className="hover" activeClassName="nav-active">
                            <li>Effet de Hover</li>
                        </NavLink>
                        <NavLink to="/site-sante" exact className="hover" activeClassName="nav-active">
                            <li>Site Hopital</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink to="/contact" exact className="hover" activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navigation;