
const Skills = () => {
  const skills = ["React", "Node.js", "Serverless", "Docker"];
  
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;