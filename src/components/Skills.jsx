import React from "react";

function Skills() {
  // skills list rendered as badges
  const skills = ["React", "JavaScript", "Python", "Unity", "AI/ML", "CSS/HTML", "Git", "SQL", "Node.js", "Docker", "AWS", "pyTorch", "TensorFlow", "NLP", "Computer Vision"];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
      <h2 style={styles.title}>Skills</h2>
      <div style={styles.grid}>
        {skills.map((skill, idx) => (
          <div key={idx} style={styles.skill} className="cardH">
            {skill}
          </div>
        ))}
        </div>
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
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  skill: {
    padding: "10px 20px",
    background: "#3f506c", // card contrast
    borderRadius: "8px",
    fontWeight: "bold",
    color: "#fff",
  },
};

export default Skills;
