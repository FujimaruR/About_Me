import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../site/locale';
import { motion as Motion } from "framer-motion";

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
  useSiteLocale();
  return (
    <section id="skills" className="section-wrap section-bg-1">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title mb-2">{tr("text.e09212c7d3")}</h2>
          <p className="section-subtitle mx-auto"> {tr("text.15c3b6dd3c")} </p>
        </div>

        <Motion.div className="row g-4" variants={container} initial="hidden" animate="show">
          {skillGroups.map((group) => (
            <Motion.div key={group.title} variants={item} className="col-12 col-md-6 col-lg-4">
              <div className="skill-card h-100">
                <h5 className="skill-card-title">{localizeText(group.title)}</h5>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {localizeText(skill)}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
