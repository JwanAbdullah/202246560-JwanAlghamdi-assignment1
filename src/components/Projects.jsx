import React from "react";
import kommute from "../assets/images/kommute.png";
import aic from "../assets/images/aic.png";
import kfupmgpt from "../assets/images/kfupm-gpt.png";

function Projects() {
  const projects = [
  { name: "KOMMUTE", image: kommute,desc: "A smart transportation solution designed to improve student commuting efficiency" ,link: "https://www.canva.com/design/DAG_gymoKEI/mMmAOfvqPfbOOdbuFgniWw/edit" },
  { name: "AI Club Website", image: aic,desc: "A responsive website built to manage AI Club events and showcase technical projects", link: "https://aic-kfupm.github.io/AIC/" },
  { name: "KFUPM-GPT", image: kfupmgpt, desc: "An AI-powered assistant built to help students access academic resources and information", link: "https://github.com/HasanMajed/kfupm-chatbot.git" },
];


  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
      <h2 style={styles.title}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((proj, idx) => (
          <a key={idx} 
          href={proj.link} 
          style={styles.card} 
          className="cardH" 
          onClick={(e) => {
              if (proj.link === "#") e.preventDefault();
            }}>
          {proj.image && (
            <img
              src={proj.image}
              alt={proj.name}
              style={styles.image}
            /> 
          )}
            <h3 style={styles.projectName}>{proj.name}</h3>
            <p>{proj.desc}</p>
          </a>
        ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#dbeafe",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
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
    width: "280px",
    height: "360px",
    background: "#3f506c", 
    borderRadius: "12px",
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "transform 0.2s",
  },
  projectName: {
    margin: "0 0 10px 0",
    fontSize: "1.35rem",      // bigger
    fontWeight: "900",        // stronger
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "#ffffff",
  },
};

export default Projects;
