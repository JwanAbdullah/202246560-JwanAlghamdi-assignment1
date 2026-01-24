import React from "react";

function Header() {
  return (
    <header id="home" style={styles.header}>
      <img src="https://via.placeholder.com/140" alt="Profile" style={styles.avatar} />
      <h1 style={styles.name}>Jwan Alghamdi</h1>
      <p style={styles.tagline}>Junior Software Engineer | AI Enthusiast</p>
    </header>
  );
}

const styles = {
  header: {
    textAlign: "center",
    padding: "120px 20px 60px",
  },
  avatar: {
    borderRadius: "50%",
    width: "140px",
    height: "140px",
    border: "4px solid #fff",
  },
  name: {
    fontSize: "3rem",
    margin: "20px 0 10px",
  },
  tagline: {
    fontSize: "1.2rem",
    color: "#dbeafe", /* soft contrast on blue */
  },
};

export default Header;
