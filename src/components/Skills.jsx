import React from "react";

function Skills() {
  const skills = ["React", "JavaScript", "Python", "Unity", "AI/ML", "CSS/HTML"];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.title}>Skills</h2>
      <div style={styles.grid}>
        {skills.map((skill, idx) => (
          <div key={idx} style={styles.skill}>
            {skill}
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
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  skill: {
    padding: "10px 20px",
    background: "#3b82f6", // card contrast
    borderRadius: "8px",
    fontWeight: "bold",
    color: "#fff",
  },
};

export default Skills;
