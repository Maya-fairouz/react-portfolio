import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_iu5qoii", // Replace with your EmailJS Service ID
        "template_gz6fyfo", // Replace with your EmailJS Template ID
        formData,
        "BCl7QaJpAg2UmtiDI" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("error");
        }
      );
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>Send</button>
      </form>

      {status === "success" && <p className={styles.success}>Message sent successfully!</p>}
      {status === "error" && <p className={styles.error}>Something went wrong. Try again!</p>}

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
    </section>
  );
};
