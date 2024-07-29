import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, <br />
          I'm Debanjana De Biswas
        </h1>
        <p className={styles.description}>
          Quick learner with a curious mind. I aspire to be a great addition to
          the software industry. Have good expertise in leading and working in a
          team and problem-solving skills.
        </p>
        <a href="mailto:debanjanadebiswas@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/portfolio-image.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
