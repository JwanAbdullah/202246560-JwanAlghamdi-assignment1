import React from "react";
import kommute from "../assets/images/kommute.png";
import aic from "../assets/images/aic.png";
import kfupmgpt from "../assets/images/kfupm-gpt.png";

function Projects() {
  const projects = [
  { name: "KOMMUTE", image: kommute, link: "#" },
  { name: "AI Club Website", image: aic, link: "#" },
  { name: "KFUPM-GPT", image: kfupmgpt, link: "#" },
];


  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((proj, idx) => (
          <a key={idx} href={proj.link} style={styles.card}>
          {proj.image && (
            <img
              src={proj.image}
              alt={proj.name}
              style={styles.image}
            /> )}
            <div>{proj.name}</div>
          </a>
        ))}
      </div>
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
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  image: {
  width: "135px",
  height: "135px",
  objectFit: "contain",
  borderRadius: "50%",   //round
  padding: "10px",
  margin: "0 auto 15px",
  display: "block",
  },

  card: {
    padding: "20px 30px",
    background: "#3f506c", // slightly different shade for contrast
    borderRadius: "12px",
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "transform 0.2s",
  },
};

export default Projects;
