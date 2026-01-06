import styles from "../../components/Contacts/Contacts.module.css";
import React from "react";
import { getImageUrl } from "../../utils";
export const Contacts=()=>{
    return (
        <footer id="Contact" className={styles.container}>
            <div className={styles.text}>
                <h2>
                    Contact
                </h2>
                <p>
                    Feel Free To reach Me
                </p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"></img>
                    <a href="mailto:sahooanurag56@gmail.com">sahooanurag56@gmail.com</a>
                </li>
                                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email Icon"></img>
                    <a href="https://www.linkedin.com/in/anurag-sahoo-6397491a5/">linkedin.anurag-sahoo</a>
                </li>
                                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon"></img>
                    <a href="https://github.com/anuragsahoo1">github.anuragsahoo1</a>
                </li>
            </ul>
        </footer>
    );
}