import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <div className="project-number">{project.number}</div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
              <FaGithub size={19} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo">
              <ExternalLink size={19} />
            </a>
          )}
        </div>
      </div>

      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-stack">
        {project.stack.map(item => <span key={item}>{item}</span>)}
      </div>

      <div className="project-actions">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            Source Code <FaGithub size={15} />
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live Demo <ExternalLink size={15} />
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
