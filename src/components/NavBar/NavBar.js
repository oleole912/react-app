import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './NavBar.module.scss';


const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link to="/"><i className="icon fa fa-solid fa-tasks"></i></Link>
            </div>
            <ul className={styles.menu}>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.menu__link} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.menu__link} to="/favorite">Fovorite</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.menu__link} to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;
