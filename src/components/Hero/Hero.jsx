import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Maya Fairouz Menaifi</h1>
        <p className={styles.description}>
        Hi, welcome to my portfolio!
        Here, I try to reflect reflect my personality, journey, skills, and projects I build in life. :) 
        </p>
        <div className={styles.line}></div>
        <h3>Quotes</h3>
        <ul>
          <li>“So many books, so little time” - Frank Zappa</li>
          <li>“Simplicity is the ultimate sophistication” - Leonardo da Vinci</li>
          <li>“Nigga please” - latrell spencer </li>
        </ul>

        <div className={styles.line}></div>
        <h3>Check out my cv </h3>

        <div className={styles.line}></div>
        <h3>Contact Me </h3>
              <div className={styles.socialLinks}>
                <a href="https://github.com/Maya-fairouz" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/maya-fa%C3%AFrouz-64b5b21bb/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} />
                </a>
                <a href="https://www.instagram.com/maya_fairouz/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} />
                </a>
              </div>
      </div>

      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
