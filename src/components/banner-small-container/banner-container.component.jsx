import React from "react"
import Styles from "./banner-container.module.scss"

const BannerSmall = ({ img, header, description }) => {
  return (
    <div className={Styles.container}>
      <img src={img} alt={header} className={Styles.img} />
      <div className={Styles.textContainer}>
        <h1 className={Styles.h1}>{header}</h1>
        <h3 className={Styles.h3}>{description}</h3>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default BannerSmall
