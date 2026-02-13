import React from "react";

function Experience() {
  const experiences = [
    { role: "AI Club Leader", year: "2025", desc: "Leading AI projects and workshops." },
    { role: "Unity Game Developer", year: "2024", desc: "Developed 2D games using Unity." },
    { role: "KAUST AI Trainee", year: "2024", desc: "Completed intensive AI training." },
  ];

  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.title}>Experience</h2>
      <div style={styles.cards}>
        {experiences.map((exp, idx) => (
          <div key={idx} style={styles.card}>
            <h3>{exp.role} ({exp.year})</h3>
            <p>{exp.desc}</p>
          </div>
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
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "#3f506c", // lighter blue card
    padding: "20px 25px",
    borderRadius: "12px",
    width: "250px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
  },
};

export default Experience;
