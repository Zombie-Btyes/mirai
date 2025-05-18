import React, { useState } from 'react';
import '../style/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Miraiban</div>

        <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </div>

        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#timeline">Journey</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
