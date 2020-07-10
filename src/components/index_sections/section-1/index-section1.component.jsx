import React from "react";
import IndexStyles from "./index-section1.module.scss";

const IndexSection1 = () =>{
    return(
        <div className={IndexStyles.inner}>
          <h3 className={IndexStyles.h3}>COMFORT</h3>
          <h3 className={IndexStyles.h3}>STYLE</h3>
          <h3 className={IndexStyles.h3}>AESTHETIC</h3>
          <h3 className={IndexStyles.h3}>UNIQUENESS</h3>
        </div>
    )   
}

export default IndexSection1