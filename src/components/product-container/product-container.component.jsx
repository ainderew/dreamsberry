import React from "react"
import Styles from "./product-container.module.scss"

const ProductContainer = ({ img, ProductName, Price }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
        <img src={img} alt="Product" className={Styles.img} />
      </div>
      <div className={Styles.textContainer}>
        <h2 className={Styles.h2}>{ProductName}</h2>
        <h2 className={Styles.h2}>{Price}</h2>
      </div>
    </div>
  )
}

export default ProductContainer
