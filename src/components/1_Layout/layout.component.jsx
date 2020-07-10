import React from "react"
import Header from "../header/header.component"
import "../../SCSS/1_global_scss/global.style.scss"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
    // <div className="main-container">
    //  <Header />
    //  {children}
    // </div>
  )
}

export default Layout
