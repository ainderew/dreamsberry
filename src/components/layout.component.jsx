import React from "react";
import Header from "../components/header/header.component";
import "../SCSS/1_global_scss/global.style.scss";
const Layout = ({ children }) => {

    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout;