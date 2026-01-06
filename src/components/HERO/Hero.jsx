import React from "react";
import heroImage from "../../assets/hero/heroImage.png";
import heroImages from "../../assets/hero/heroImages.png"
import heroImages3 from "../../assets/hero/heroImages3.png";
import styles from "./Hero.module.css";
export const Hero = ()=>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi ,I am Anurag
            </h1>
            <p className={styles.description}>I’m a Database and Linux Administrator with hands-on experience in ReactJS and Android development. Reach out if you’d like to learn more or collaborate.</p>
            <a href="sahooanurag56@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImages3} alt="alt-hero" className={styles.heroImg}></img>
        <div className={StyleSheet.topBlur}></div>
        <div className={StyleSheet.bottomBlur}></div>
    </section>

}