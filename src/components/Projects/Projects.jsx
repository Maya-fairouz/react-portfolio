import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils"; // Adjust the path if needed     

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with React and styled with CSS modules.",
    image: getImageUrl("projects/horse.jpg"), // Replace with actual path
    tools: ["React", "CSS Modules", "Vite"],
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A full-stack e-commerce application with authentication and payments.",
    image: getImageUrl("projects/na3nou3.jpg"),
    tools: ["React", "Node.js", "MongoDB"],
  },
];

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.content}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.description}>
          Here are some of the projects I have worked on.
        </p>

        <div className={styles.cards}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.card}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <div className={styles.cardContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tools}>
                  {project.tools.map((tool, index) => (
                    <span key={index} className={styles.tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
