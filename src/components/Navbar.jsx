import React from "react";
import '../style/Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
