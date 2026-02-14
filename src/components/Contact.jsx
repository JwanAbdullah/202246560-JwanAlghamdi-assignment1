import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState(""); // "" | "sent"

  // Front-end only: prevents page reload + shows a temporary success message.
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    e.target.reset();

    // hide confirmation message after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact Me</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input style={styles.input} type="text" placeholder="Your Name" required />
        <input style={styles.input} type="email" placeholder="Your Email" required />
        <textarea style={styles.textarea} placeholder="Your Message" required />

        <button style={styles.button} type="submit">
          Send Message
        </button>

        {status === "sent" && (
          <div style={styles.success}>
            Message sent! will get back to you soon.
          </div>
        )}
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
    maxWidth: "420px",
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
    background: "#3f506c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  success: {
    marginTop: "8px",
    padding: "10px",
    borderRadius: "8px",
    background: "rgba(34,197,94,0.15)",
    border: "1px solid rgba(34,197,94,0.35)",
    color: "#dcfce7",
    fontWeight: "600",
  },
};

export default Contact;
