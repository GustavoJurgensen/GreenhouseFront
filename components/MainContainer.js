import styles from '../styles/MainContainer.module.css'

import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function MainContainer({children}){
    return(
        <>
        <Head>
            <title>GreenhouseApp</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>
        <Header/>
        <div className={styles.mainContainer}>{children}</div>
        <Footer/>
        </>
    )
}