import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#home" className="logo">Suman Sourabh<span className="accent">.</span></a>
        <p>Designed & built by Suman Sourabh · 2026</p>
        <div className="footer-links">
          <a href="https://github.com/sumansourabh192-del" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={19} /></a>
          <a href="https://linkedin.com/in/suman-sourabh-bb24912a3/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={19} /></a>
          <a href="#home" aria-label="Back to top"><ArrowUp size={19} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

