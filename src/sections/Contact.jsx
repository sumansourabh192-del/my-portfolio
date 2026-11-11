import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-wrapper">
        <p className="eyebrow">GET IN TOUCH</p>

        <h2>Let's build something<br />great together<span>.</span></h2>

        <p className="contact-description">
          Looking for a MERN Stack Developer intern or entry-level developer?
          I'm open to opportunities, collaborations, and interesting projects.
          Let's connect!
        </p>

        <a
          href="mailto:sumansourabh192@gmail.com"
          className="email-card"
        >
          <div className="email-card-icon">
            <Mail size={23} />
          </div>

          <div className="email-card-content">
            <small>DROP ME AN EMAIL</small>
            <strong>sumansourabh192@gmail.com</strong>
          </div>

          <ArrowUpRight size={22} className="email-arrow" />
        </a>

        <div className="social-contact">
          <a
            href="https://linkedin.com/in/suman-sourabh-bb24912a3/"
            target="_blank"
            rel="noreferrer"
            className="social-contact-link"
          >
            <FaLinkedin size={20} />
            LinkedIn
            <ArrowUpRight size={16} />
          </a>

          <a
            href="https://github.com/sumansourabh192-del"
            target="_blank"
            rel="noreferrer"
            className="social-contact-link"
          >
            <FaGithub size={20} />
            GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
