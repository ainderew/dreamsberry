import React from "react";
import Styles from "./index-section2.module.scss";

//COMPONENTS
import SmallBanner from "../../banner-small-container/banner-container.component"

//IMAGES
import Promotion from "../../../assets/Images/promotion-small-banner.jpg"
import Men from "../../../assets/Images/men-small-banner.jpg"
import Women from "../../../assets/Images/women-small-banner.jpg"
const Section3 = () =>{
    return(
        <div className={Styles.inner}>
            <SmallBanner img={Men} header="Shop For Men" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, hic?"/>
            <SmallBanner img={Women} header="Shop For Women"/>
            <SmallBanner img={Promotion} header="Shop For Men"/>
        </div>
    )
}

export default Section3;
