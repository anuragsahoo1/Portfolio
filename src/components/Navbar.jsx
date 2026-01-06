import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils";
import menuIcon from "../assets/nav/menuIcon.png"
import closeIcon from "../assets/nav/closeIcon.png"
export const Navbar=()=>{
    const [menuOpen,setMenuOpen]=useState(false);
    return (
    <nav className={styles.navbar}>
        <a className={styles.title}
        href="/">Portfolio
        </a>
        
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen
                ? closeIcon
                :menuIcon
            } alt="menu-button"
            onClick={()=>setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>{setMenuOpen(false)}}>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                    <li>
                    <a href="#projects">projects</a>
                </li>
                                <li>
                    <a href="#about">about</a>
                </li>
                <li>
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};