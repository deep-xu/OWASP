import { useState } from 'react';
import React from 'react';
import './App.css';
import logo from './assets/logo.png'

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true); // Show the login modal
  };

  const handleCloseModal = () => {
    setShowLoginModal(false); // Close the login modal
  };
  return (
    <div className="App">

      {/* Hero Section with Navbar */}
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"><img src={logo} alt='logo' /></div>
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#events">Upcoming Events</a></li>
          <li><a href="#stats">Stats</a></li>
          <li>
            <button className="login-button" onClick={handleLoginClick}>
              Login
            </button>
          </li>
        </ul>
      </nav>


      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1><br></br>Welcome to the OWASP Sharda University Chapter</h1>
          <p>
            A vibrant community for tech enthusiasts of all kinds! Explore, innovate, and collaborate in fields ranging from AI to cybersecurity.
          </p>
        </div>

        <div className='hero-animation'></div>

        {/* About Us */}
        <div id="about" className="section">
          <h2>About Us</h2>
          <p>
          Welcome to the OWASP Sharda University Chapter, a vibrant community for tech enthusiasts of all kinds! Whether your passion lies in software development, artificial intelligence, web design, cybersecurity, or creative digital arts, our chapter offers a space for you to explore, innovate, and collaborate.
<br></br><br></br>
While OWASP is globally known for its mission to improve software security, our chapter expands beyond cybersecurity to embrace all realms of technology. We are a diverse community where developers, designers, content creators, and tech enthusiasts come together to work on exciting projects, share knowledge, and learn from one another. From cutting-edge coding and technical research to creative design and social media strategy, there's something here for everyone.
<br></br><br></br>

When you join the OWASP Sharda University Chapter, you will:
<br></br>

• Explore a wide range of technologies, from ethical hacking to AI, web development, and digital media.<br></br>
• Collaborate with like-minded peers across various fields, working on multidisciplinary projects and initiatives.<br></br>
• Join one of our specialized teams, whether it’s creative design, social media, public relations, management, videography, or technical development, allowing you to dive deep into your area of interest.<br></br>
• Attend workshops, hackathons, and events hosted by tech experts, and grow your skillset in a supportive, dynamic environment.<br></br>
• Make an impact by contributing to real-world projects, building your portfolio, and gaining hands-on experience.
<br></br><br></br>
Our goal is to foster a collaborative environment where tech enthusiasts from every background can thrive. Whether you’re an experienced coder, a budding designer, or just curious about the tech world, the OWASP Sharda University Chapter is your platform to innovate, grow, and make a difference.
          </p>
        </div>

        {/* Upcoming Events */}
        <div id="events" className="section">
          <h2>Upcoming Events</h2>
          <p>
            Stay tuned for 5-Day Roadmap event! Each day is dedicated to a different cutting-edge tech field:
            Day 1: Cyber Security Roadmap Day 2: AI/ML Roadmap Day 3: Web Development Roadmap Day 4: IoT Roadmap Day 5: Cloud Roadmap
          </p>
        </div>

        {/* Stats */}
        <div id="stats" className="section">
          <h2>Our Stats</h2>
          <ul>
            <li>600+ Active Members</li>
            <li>0+ Successful Events</li>
          </ul>
        </div>
      </section>


       {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content animate-fade-in">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter your username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="submit-button">Login</button>
            </form>
          </div>
        </div>
      )}


      {/* Footer */}
      <footer className="footer">
        <h3>Join Us</h3>
        <br></br>
        <ul>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
