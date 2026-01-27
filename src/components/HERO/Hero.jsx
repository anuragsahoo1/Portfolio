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
            <p className={styles.description}>    Lead Engineer at TPSODL with Experience managing MSSQL SERVER and MariaDB. DATA Analyst intern background with hands-on experience inSQL-driven analysis using Snowflake,AWS S3, and spreadshees. 
                            Project-based experience with dbt and Tableau to deliver actionable business insights.
                        </p>
            <a href="#Contact" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImages3} alt="alt-hero" className={styles.heroImg}></img>
        <div className={StyleSheet.topBlur}></div>
        <div className={StyleSheet.bottomBlur}></div>
    </section>

}