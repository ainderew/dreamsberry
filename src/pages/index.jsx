import React from "react"
import Layout from "../components/1_Layout/layout.component"
import IndexStyle from "../SCSS/index_scss/index.module.scss"

//COMPONENTS
import Section1 from "../components/index_sections/section-1/index-section1.component"
import Section3 from "../components/index_sections/section-3/index-section3.component"
//IMAGES
import HeroImg from "../assets/Images/hero.png"

const Index = () => {
  return (
    <Layout>
      <div className={IndexStyle.homepage}>
        <div className={IndexStyle.hero}>
          <h2 className={IndexStyle.waterMark}>DREAMSBERRY</h2>
          <img src={HeroImg} alt="" className={IndexStyle.heroImg} />
          <div className={IndexStyle.taglineContainer}>
            <h1 className={IndexStyle.h1}>FASHION MADE SIMPLE</h1>
            <h2 className={IndexStyle.h2}>It All Started From A House</h2>
            <p className={IndexStyle.p}>
              Made with the goal of having the person look
              <br /> as good with as little hassle as possible
            </p>
            <button className={IndexStyle.button}>Shop Now</button>
          </div>
        </div>

        <Section1 />
        <Section3 />
      </div>
    </Layout>
  )
}

export default Index
