import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>get in the center bitch </h1>
        <p className={styles.description}>
          Hi , 
          welcome here where i share my journey 
          khasetni khedma  
        </p>
        <h3>Quotes</h3>
        <h3>Images</h3>
        <h3>CV</h3>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
