import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <a href="#home" style={styles.link}>Home</a>
      <a href="#experience" style={styles.link}>Experience</a>
      <a href="#projects" style={styles.link}>Projects</a>
      <a href="#skills" style={styles.link}>Skills</a>
      <a href="#contact" style={styles.link}>Contact</a>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "25px",
    background: "rgba(255,255,255,0.1)",
    padding: "15px 30px",
    borderRadius: "10px",
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    backdropFilter: "blur(5px)"
  },
  link: {
    color: "#fff",
    fontWeight: "bold",
    transition: "color 0.2s",
  },
};

export default Navbar;
