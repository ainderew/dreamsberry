import React from "react";
import Layout from "../components/layout.component"
import IndexStyle from "../SCSS/index_scss/index.module.scss";

const Index = () => {
    return (
        <Layout>
            <div className={IndexStyle.homepage}>
                <div className={IndexStyle.hero}>

                </div>
                <div className={IndexStyle.inner}></div>
            </div>
        </Layout>
    )
}

export default Index;