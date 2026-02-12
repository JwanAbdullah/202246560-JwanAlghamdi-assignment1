import React from "react";

function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <p>© 2026 Jwan Alghamdi</p>
      <div style={styles.social}>
        <a href="https://github.com/JwanAbdullah" style={styles.link}>GitHub</a>
        <a href="https://www.linkedin.com/in/jwanalghamdi/" style={styles.link}>LinkedIn</a>
        <a href="mailto:jwaaaanabdullah@gmail.com" style={styles.link}>Email</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "40px 20px",
    textAlign: "center",
  },
  social: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    color: "#dbeafe",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Footer;
