import { useState } from "react";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";

function Navbar({ darkMode, onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a className="logo" href="#home">
          <Code2 size={25} /> <span>Suman Sourabh<span className="accent">.</span></span>
        </a>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-button" onClick={onToggle} aria-label="Toggle theme">
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


