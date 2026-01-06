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
                            Android And Flutter Developer
                        </h3>
                        <p>
                        Application Developer with experience in building responsive android app
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="alt-server-icon"></img>
                    <div>
                        <h3>
                            DB And Linux Administratror
                        </h3>
                        <p>
                        I am experienced db and linux administrator
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="alt-cursor-icon"></img>
                    <div>
                        <h3>
                            Hypervisor And Openshift 
                        </h3>
                        <p>
                            hands on experience on Cloud.
                            </p>
                    </div>
                </li>
                </ul>
        </div>

    </section>
}