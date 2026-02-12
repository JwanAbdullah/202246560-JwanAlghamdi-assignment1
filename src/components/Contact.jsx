import React from "react";

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact Me</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" required style={styles.input} />
        <input type="email" placeholder="Your Email" required style={styles.input} />
        <textarea placeholder="Your Message" required style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#dbeafe",
  },
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    minHeight: "100px",
  },
  button: {
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Contact;
