import React from "react";

function Projects() {
  const projects = [
    { name: "Portfolio Site", link: "#" },
    { name: "AI Club Website", link: "#" },
    { name: "2D Unity Game", link: "#" },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((proj, idx) => (
          <a key={idx} href={proj.link} style={styles.card}>
            {proj.name}
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
  card: {
    padding: "20px 30px",
    background: "#3b82f6", // slightly different shade for contrast
    borderRadius: "12px",
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "transform 0.2s",
  },
};

export default Projects;
