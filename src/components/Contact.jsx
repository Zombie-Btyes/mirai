import React from 'react';
import '../style/Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-cards">
          {/* Optional Phone Card */}
          {/* <div className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>Phone</h3>
            <p>+65 9115 1253</p>
            <a href="tel:+6591151253" className="btn">Call Me</a>
          </div> */}

          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>junxiang12321@gmail.com</p>
            <a href="mailto:junxiang12321@gmail.com" className="btn">Email Me</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🔗</div>
            <h3>Social</h3>
            <div className="social-links">
              <a href="https://github.com/Zombie-Btyes" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/jun-xiang-yeo-20a62520b" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </section>
  );
}
