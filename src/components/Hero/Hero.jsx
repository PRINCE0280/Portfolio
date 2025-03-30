import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prince</h1>
        <p className={styles.description}>
          I'm a Mern-stack developer and this is my portfolio website. Feel free to reach out if you'd like to know more about me...
        </p>
        <div className={styles.buttonContainer}>
          <a href="#projects" className={styles.contactBtn}>
            View Work
          </a>
          <a href="/RESUME/RESUME.pdf" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
  Resume
</a>

        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
