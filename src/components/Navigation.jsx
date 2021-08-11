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
                        <NavLink to="/project-1" exact className="hover" activeClassName="nav-active">
                            <li>Projet 1</li>
                        </NavLink>
                        <NavLink to="/project-2" exact className="hover" activeClassName="nav-active">
                            <li>Projet 2</li>
                        </NavLink>
                        <NavLink to="/project-3" exact className="hover" activeClassName="nav-active">
                            <li>Projet 3</li>
                        </NavLink>
                        <NavLink to="/project-4" exact className="hover" activeClassName="nav-active">
                            <li>Projet 4</li>
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