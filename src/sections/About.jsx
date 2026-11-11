import { GraduationCap, BriefcaseBusiness, Target } from "lucide-react";

function About() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2>About <span className="gradient-text">Me</span></h2>
        <p>A little about my journey and what drives me.</p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>Building today. Learning for tomorrow.</h3>
          <p>
            I'm a Computer Science student and aspiring Full Stack Developer
            interested in building scalable, user-friendly web applications.
            I work with React, JavaScript, Node.js, Express.js and databases.
          </p>
          <p>
            Through hands-on projects, I have explored REST API integration,
            authentication, database management, AI-powered applications and
            responsive UI development. I'm looking forward to contributing to
            real-world software projects and growing as a developer.
          </p>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <GraduationCap size={25} />
            <div><h4>Education</h4><p>B.Tech – Computer Science</p><small>Expected Graduation: 2027</small></div>
          </div>
          <div className="info-card">
            <BriefcaseBusiness size={25} />
            <div><h4>Career Goal</h4><p>Software Development</p><small>Internship & Full-Time Opportunities</small></div>
          </div>
          <div className="info-card">
            <Target size={25} />
            <div><h4>Current Focus</h4><p>Full Stack Development</p><small>Building practical projects</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

