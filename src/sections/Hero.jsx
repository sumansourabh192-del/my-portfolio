import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="availability">
          Open to MERN Stack Developer Internships & Full-Time Opportunities
        </p>

        <p className="eyebrow">HELLO, I'M</p>

        <img src="/images/profile.jpg" alt="Suman Sourabh" className="profile-image" />
<h1>Suman Sourabh<span>.</span></h1>

        <h2>MERN Stack Developer</h2>

        <p className="hero-description">
          I build responsive and scalable web applications using MongoDB,
          Express.js, React.js, and Node.js. I enjoy developing practical
          solutions, integrating REST APIs, and creating user-friendly
          digital experiences while continuously improving my development skills.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Explore Projects <ArrowUpRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/sumansourabh192-del" target="_blank" rel="noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/suman-sourabh-bb24912a3/" target="_blank" rel="noreferrer">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-card">
          <div className="code-card-header">
            <span></span><span></span><span></span>
            <p>developer.js</p>
          </div>
          <div className="code-content">
            <p><span className="code-purple">const</span> developer = {"{"}</p>
            <p className="code-indent">name: <span className="code-green">"Suman Sourabh"</span>,</p>
            <p className="code-indent">role: <span className="code-green">"MERN Stack Developer"</span>,</p>
            <p className="code-indent">stack: [</p>
            <p className="code-indent code-indent-2"><span className="code-green">"MongoDB"</span>, <span className="code-green">"Express.js"</span>,</p>
            <p className="code-indent code-indent-2"><span className="code-green">"React.js"</span>, <span className="code-green">"Node.js"</span></p>
            <p className="code-indent">],</p>
            <p className="code-indent">passion: <span className="code-green">"Building useful products"</span></p>
            <p>{"}"};</p>
          </div>
          <div className="code-card-footer">
            <Code2 size={15} /> Always learning, always building.
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={17} /> Scroll to explore
      </a>
    </section>
  );
}

export default Hero;

