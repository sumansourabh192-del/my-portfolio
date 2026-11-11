import { Code2, Database, Wrench, BrainCircuit } from "lucide-react";

const groups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Vite"]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express.js", "REST APIs", "Java", "PHP"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"]
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: ["Python", "Machine Learning", "NLP", "TF-IDF", "Google Gemini API"]
  }
];

function Skills() {
  return (
    <section className="section section-muted" id="skills">
      <div className="section-heading">
        <p className="eyebrow">MY TOOLKIT</p>
        <h2>Skills & <span className="gradient-text">Technologies</span></h2>
        <p>Technologies I use to build applications and solve problems.</p>
      </div>

      <div className="skills-grid">
        {groups.map(({ title, icon: Icon, skills }) => (
          <div className="skill-card" key={title}>
            <div className="skill-title"><Icon size={22} /><h3>{title}</h3></div>
            <div className="skill-tags">
              {skills.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
