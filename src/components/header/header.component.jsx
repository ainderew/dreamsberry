import React from "react";
import HeaderStyle from "../header/header.module.scss";

const Header = () => {
    return (
        <header className={HeaderStyle.header}>
            <nav className={HeaderStyle.nav}>
                <div className={HeaderStyle.logoContainer}>
                    <h1 className={HeaderStyle.logo}>DreamsBerry</h1>
                </div>
                <ul className={HeaderStyle.navUl}>
                    <li className={HeaderStyle.li}>Products</li>
                    <li className={HeaderStyle.li}>About Us</li>
                    <li className={HeaderStyle.li}>Contact Us</li>
                </ul>
                <ul className={HeaderStyle.socialUl}>
                    <li className={HeaderStyle.li}>F</li>
                    <li className={HeaderStyle.li}>T</li>
                    <li className={HeaderStyle.li}>I</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;