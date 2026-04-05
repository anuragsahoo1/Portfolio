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
            <p className={styles.description}>    Data-driven professional with hands-on experience in SQL-based analytics, database management, and data visualization. Currently working as a Lead Engineer at TPSODL, managing MSSQL Server and MariaDB while performing data analysis to extract insights from large datasets. Experienced in working with Snowflake, AWS S3, and spreadsheets for data processing and reporting. Skilled in building analytics workflows using dbt and developing interactive dashboards in Tableau to support data-driven decision making.
                        </p>
            <a href="#Contact" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImages3} alt="alt-hero" className={styles.heroImg}></img>
        <div className={StyleSheet.topBlur}></div>
        <div className={StyleSheet.bottomBlur}></div>
    </section>

}