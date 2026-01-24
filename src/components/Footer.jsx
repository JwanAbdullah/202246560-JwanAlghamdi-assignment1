import React from "react";

function Footer() {
  return (
    <footer id="contact" style={styles.footer}>
      <p>© 2026 Jwan Alghamdi</p>
      <div style={styles.social}>
        <a href="#" style={styles.link}>GitHub</a>
        <a href="#" style={styles.link}>LinkedIn</a>
        <a href="#" style={styles.link}>Email</a>
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
