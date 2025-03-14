import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About ur mom</h2>
      <div className={styles.content}>
        <p>blablabla</p>
      <h3>Education</h3>
      <h3>Certificates</h3>
      <h3>Things i love</h3>
      <h3>Inspiration</h3>
       
      </div>
    </section>
  );
};
