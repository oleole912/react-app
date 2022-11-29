import React from 'react';
import styles from './NavBar.module.scss';

function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <a href="/"><i className="icon fa-solid fa-list"></i></a>
            </div>
            <ul className={styles.menu}>
                <li><a href="/">Home</a></li>
                <li><a href="/favorite">Fovorite</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
