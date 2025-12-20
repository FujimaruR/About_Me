import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "PHP", "Java", "C++", "C#", "Kotlin"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Vite"],
  },
  {
    title: "Backend & Frameworks",
    skills: ["Node.js", "NestJS", "Express", "Prisma ORM", "Python (Odoo modules)", "REST APIs"],
  },
  {
    title: "Databases & Data Formats",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "SQL Server", "JSON", "XML"],
  },
  {
    title: "Cloud, DevOps & Systems",
    skills: ["AWS EC2", "AWS S3", "Linux (Ubuntu)", "Docker", "Nginx", "PM2", "Git", "GitHub", "CI/CD basics"],
  },
  {
    title: "Other Tools & Concepts",
    skills: ["Authentication & Authorization", "CRUD Systems", "MVC Architecture", "API Integration", "Technical Documentation", "Basic UX"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="section-wrap section-bg-1">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title mb-2">Skills</h2>
          <p className="section-subtitle mx-auto">
            Tecnologías y herramientas que uso para construir frontends modernos, backends sólidos y despliegues en producción.
          </p>
        </div>

        <motion.div className="row g-4" variants={container} initial="hidden" animate="show">
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={item} className="col-12 col-md-6 col-lg-4">
              <div className="skill-card h-100">
                <h5 className="skill-card-title">{group.title}</h5>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
