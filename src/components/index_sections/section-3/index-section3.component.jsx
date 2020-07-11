import React from "react";
import Styles from "./index-section3.module.scss";

//COMPONENT
import ProductContainer from "../../product-container/product-container.component";
//IMAGES
// import Img1 from "../../../assets/Images/Products/1.jpg"
import Img2 from "../../../assets/Images/Products/2.jpg"
import Img3 from "../../../assets/Images/Products/3.jpg"
// import Img4 from "../../../assets/Images/Products/4.jpg"
import Img5 from "../../../assets/Images/Products/5.jpg"

const Section3 = () =>{
    return(
        <div className={Styles.inner}>
            <h1 className={Styles.h1}>TOP PICKS OF JUNE</h1>
            <ProductContainer img={Img5} ProductName="Product 1" Price={"100.00"} />
            <ProductContainer img={Img2} ProductName="Product 1" Price={"100.00"} />
            <ProductContainer img={Img3} ProductName="Product 1" Price={"100.00"} />
        </div>
    )    
}

export default Section3;