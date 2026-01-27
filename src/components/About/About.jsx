import React from "react";
import aboutImg from "../../assets/about/aboutImage.png";
// import aboutImages from "../../assets/hero/heroImages.png";
import aboutImage2 from "../../assets/about/aboutImage2.png"
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uilcon from "../../assets/about/uiIcon.png";
import styles from "./About.module.css"
export const About =()=>{
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        <div className={StyleSheet.content}>
            <img src={aboutImage2} alt="alt-about-image" className={styles.aboutImage}></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={cursorIcon} alt="alt-cursor-icon"></img>
                    <div>
                        <h3>
                            Data Analyst & Specialist
                        </h3>
                        <p>
                        Experienced in analyzing large datasets using SQL to generate insights, 
                        support reporting, and enable data-driven decision making. 
                        Hands -on experience with Snowflake,spreadsheets, 
                        and data transformation for analytical use cases
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="alt-server-icon"></img>
                    <div>
                        <h3>
                            Database & Data Platform Engineer
                        </h3>
                        <p>
                            Lead Engineer at TPSODL with ahnds-on experience managing MS SQL 
                            Server and MariaDB. Skilled in database administration, query optimization, data reliabilty,
                            backups, and working with structured enterprise data for analytics and reporting.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="alt-cursor-icon"></img>
                    <div>
                        <h3>
                            Cloud & Analytical Tooling
                        </h3>
                        <p>
                            Experience working with analytics ecosystems including snowflake, AWS S3, dbt, and Tableau through 
                            internship and project-based work.Familiar with data pipelines, sloud storage, virtualisation(Hyper-V,VMware ESXi) and 
                            Linux enviroments supporting analytical workloads.
                        </p>
                    </div>
                </li>
                </ul>
        </div>

    </section>
}