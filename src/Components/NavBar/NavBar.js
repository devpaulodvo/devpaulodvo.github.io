import React from "react";
import styles from './NavBar.module.css';
import {
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className={ `${styles.flexContainer} justify-center`}>
            <div className={`flex flex-row space-x-8 ${styles.navItems}`}>
                <Link to="/">
                    <div className={`${styles.navItems}`}>About</div>
                </Link>
                <Link to="/projects">
                    <div>Projects</div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;