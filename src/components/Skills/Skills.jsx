import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        
        {/* Hard Skills */}
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Hard Skills</h3>
          <ul className={styles.skillList}>
            <li><strong>Programming Languages:</strong> Python, SQL, Java, JavaScript</li>
            <li><strong>Web Technologies:</strong> HTML/CSS, Bootstrap, React, Django, Spring Boot</li>
            <li><strong>Data Analysis, Visualization & AI:</strong> Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn, TensorFlow, Power BI</li>
            <li><strong>Database Management:</strong> MySQL, PostgreSQL, Oracle</li>
            <li><strong>Cloud Computing:</strong> Docker</li>
            <li><strong>Development Tools & Methods:</strong> Git/GitHub, UML, JavaRMI, Jira</li>
            <li><strong>Service-Oriented Architecture (SOA):</strong> SOAP, REST, WSDL, XML, JSON</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Soft Skills</h3>
          <ul className={styles.skillList}>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Project Management</li>
            <li>Creativity</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
