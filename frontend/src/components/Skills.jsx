
const Skills = () => {
  const skills = ["React", "Node.js", "Serverless", "Docker", "PHP", "C", "C++", "C#", "SQL", "NoSQL", "Java", "Javascript", "HTML", "CSS", "Documentacion", "AWS", "Graficas Computacionales", "Unreal Engine", "Python"];
  
  return (
    <section id="skills" className="p-5 border-top">
        <h2 className="mb-4 text-white">Skills</h2>
        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="text-center text-white">
              <div className="fs-1">🔧</div>
              <div>{skill}</div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Skills;