import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <h1 className={styles.name}>Prince</h1> {/* Name Updated Here */}
      <nav className={styles.navLinks}>
        <a href="#projects">Projects</a>
        <a href="#Skills">Skills</a>
        <a href="#message">Contact Me</a>
      </nav>
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/prince-singh-25891026a/">
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
        </a>
        <a href="https://github.com/PRINCE0280">
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
        </a>
        <a href="mailto:princekumar.119120@marwadiuniversity.ac.in">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
        </a>
      </div>
    </footer>
  );
};
