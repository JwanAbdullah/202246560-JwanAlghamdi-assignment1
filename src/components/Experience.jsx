import React from "react";

function Experience() {
  const experiences = [
    { company:"AI Club", role: "Founder", year: "Jul 2025 - Present", desc: "Leading AI projects and workshops." },
    { company:"KFUPM Google Developer Student Club", role: "Leader", year: "Aug 2025 - Present", desc: "Guiding students through development projects and technical events" },
    { company:"GSR", role: "Tech Committee Member", year:"Jul 2025 - Present", desc: "Contributed to building a mobile transportation app for students" },
    { company:"KAUST", role: "AI Specialization Trainee", year: "Oct 2024 - Feb 2025", desc: "Completed intensive AI training focused on machine learning and deep learning" }, 
   ];

  return (
    <section id="experience" style={styles.section}>
    <div style={styles.container}>
      <h2 style={styles.title}>Experience</h2>

      <div style={styles.cards}>
        {/* render experience cards from data array*/}
        {experiences.map((exp, idx) => (
          <div key={idx} style={styles.card} className="cardH"> 
            <h3 style={styles.company}>{exp.company}</h3>
            <h4 style={styles.role}>{exp.role}</h4>
            <p style={styles.year}>{exp.year}</p>
            <p style={styles.desc}>{exp.desc}</p>
          </div>
        ))}

        </div>
      </div>
    </section>
  );
}

// "cards" is the container that controls how multiple cards are arranged (flex layout, spacing, wrapping).
// "card" defines the styling of each individual card (background, padding, shadow, size).
const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "30px",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  card: {
    background: "#3f506c",
    padding: "26px 28px",
    borderRadius: "16px",
    width: "320px",
    minHeight: "220px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
    color: "#fff",
    textAlign: "center",
  },
  company: {
    margin: "0 0 8px 0",
    fontSize: "1.5rem",
    fontWeight: "800",
    letterSpacing: "0.2px",
    color:"#d2dae6"
  },
  role: {
    margin: "0 0 12px 0",
    fontSize: "1.2rem",
    fontWeight: "600",
    opacity: 0.95,
  },
  year: {
    margin: "0 0 18px 0",
    fontSize: "0.95rem",
    opacity: 0.8,
  },
  desc: {
    margin: 0,
    fontSize: "1.1rem",
    lineHeight: "1.6",
    opacity: 0.95,
  },

};

export default Experience;
