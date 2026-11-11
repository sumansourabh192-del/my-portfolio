import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING / NLP",
    title: "TruthLens – AI Fake News Detection",
    description: "An NLP-based fake news classification application using TF-IDF and Logistic Regression, trained on a dataset of news articles.",
    stack: ["Python", "Machine Learning", "NLP", "Streamlit"],
    github: "https://github.com/sumansourabh192-del/TruthLens-AI-Fake-News-Detection"
  },
  {
    number: "02",
    category: "FULL STACK DEVELOPMENT",
    title: "ChefKart AI – MERN Food Ordering App",
    description: "A full-stack food ordering platform with authentication, shopping cart, order management, role-based access, admin dashboard and nutrition analysis.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    demo: "https://chefkart-ai.vercel.app/"
  },
  {
    number: "03",
    category: "AI / FULL STACK DEVELOPMENT",
    title: "DocuMind AI – MERN PDF Chatbot",
    description: "An AI-powered PDF chatbot that uses document retrieval, vector embeddings and semantic search to generate context-aware responses with Google Gemini.",
    stack: ["React", "Node.js", "MongoDB", "PostgreSQL", "Supabase", "Gemini API"]
  },
  {
    number: "04",
    category: "FRONTEND / API INTEGRATION",
    title: "DevFinder – GitHub Developer Explorer",
    description: "A responsive GitHub developer explorer with profile search, repository filtering, sorting, pagination and persistent dark/light theme.",
    stack: ["React", "JavaScript", "Vite", "Axios", "GitHub REST API"],
    github: "https://github.com/sumansourabh192-del/devfinder",
    demo: "https://devfinder-alpha-six.vercel.app/"
  }
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">WHAT I'VE BUILT</p>
        <h2>Featured <span className="gradient-text">Projects</span></h2>
        <p>A selection of projects where I turn ideas into working applications.</p>
      </div>

      <div className="projects-grid">
        {projects.map(project => <ProjectCard key={project.number} project={project} />)}
      </div>
    </section>
  );
}

export default Projects;
