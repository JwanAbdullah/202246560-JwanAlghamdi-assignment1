import React from "react";

function About() {
  return (
    <header id="about" style={styles.header}>
      <h1 style={styles.name}>Jwan Alghamdi</h1>
      <p style={styles.tagline}>Junior Software Engineering Student | AI Enthusiast</p>
      {/* Short bio paragraph (2–3 sentences required by the assignment) */}
      <p style={styles.tagline}>Passionate about building innovative solutions and learning new technologies.
      I enjoy working on AI-driven applications and developing creative projects.
      Currently expanding my skills in web development and machine learning.
      </p>

    </header>
  );
}

const styles = {
  header: {
    textAlign: "center",
    padding: "120px 20px 60px",
  },
  name: {
    fontSize: "3rem",
    margin: "20px 0 10px",
  },
  tagline: {
    fontSize: "1.2rem",
    color: "#dbeafe", 
  },
  
};

export default About;
