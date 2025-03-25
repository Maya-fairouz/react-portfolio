import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.description}>
      A Passionate developer amazed by the endless possibilities of technology and programming, currently on a journey to become a skilled software engineer.
      With a deep curiosity and a drive to create, he’s eager to learn, innovate, and contribute to meaningful projects.
      </div>
      
      {/* <div className={styles.content}> */}

      <div className={styles.line}></div>
      
    
      <div className={styles.subTitle}>Education
      <ul>
        <li>
        <div className={styles.description}>
        Master degree in computer science - Data Science & Intelligent systems 
        </div>
        <div className={styles.smaller}>
        <div>
          University of Constantine 2 Abdelhamid Mehri.
        </div>
        <div >
          2023 - PRESENT,  Constantine
        </div>
        </div>


        </li>

        <li>         
         <div className={styles.description}>
         License degree in computer science - Informations Systems    
        </div>
          <div className={styles.smaller}>
            <div>
              University of Constantine 2 Abdelhamid Mehri.
            </div>
            <div >
            2020 - 2023,  Constantine
          </div>
        </div>
        


        </li>

        <li>
        <div className={styles.description}>
        Baccalaureus in Technical Mathematics
         </div>
          <div className={styles.smaller}>
            <div>
            Chemachma Ali highschool.
            </div>
            <div >
            2017 - 2019, Constantin
          </div>
        </div>



        </li>
      </ul>
      </div>
      <div className={styles.line}></div>

      <div className={styles.subTitle}>Certifications</div>
      <div className={styles.line}></div>

      <div className={styles.subTitle}>Languages
      <div className={styles.description}>
      <ul>
        <li>Arabic - Native</li>
        <li>English - Fluent</li>
        <li>French - Intermidient</li>
      </ul>
      </div>

      </div>
      <div className={styles.line}></div>

      <div className={styles.subTitle}> 

      AIESEC  member , Partnership and Sponsoring Department , 
          <div className={styles.smaller}>
            <div>
              Constantine
            </div>
            <div >
            2024 -2025,  Constantine
          </div>
        </div>



        <div className={styles.description}>

       
        I engaged in partnership development activities and sponsorship negotiations, which allowed me to enhance my communication and negotiation skills through interactions with partners and sponsors. Also I developed project management skills by coordinating partnership initiatives and sponsor relationships.

      </div>
      </div>
      <div className={styles.line}></div>

      <div className={styles.subTitle}>Things I Love (introvert edition)
      <div className={styles.description}>
        <ul>
          <li>working out</li>
          <li>reading books</li>
          <li>crochet</li>
          <li>watching movies</li>
        </ul>

      </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.subTitle}>Inspirations
      <div className={styles.description}>

          im not really sure , but i get inspired from the world around me,
          its that simple, they say the devil hides in details and once u noticed them you get amazing results
          list of what i need for fellowship
      </div>
      </div>
    </section>
    
  );
};
