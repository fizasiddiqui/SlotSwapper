import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to SlotSwapper</h1>
          <p className="hero-subtitle">
            The ultimate peer-to-peer time-slot scheduling application. Swap
            your busy slots with others effortlessly and manage your time
            better.
          </p>
          <button className="cta-button" onClick={handleGetStarted}>
            {user ? "Go to Dashboard" : "Get Started"}
          </button>
        </div>
      </header>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose SlotSwapper?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Easy Scheduling</h3>
              <p>
                Create and manage your events with a simple, intuitive
                interface.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Seamless Swapping</h3>
              <p>Find and swap time slots with other users in your network.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Smart Dashboard</h3>
              <p>
                Track your events, requests, and marketplace activity in one
                place.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>
                Your data is protected with industry-standard security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to optimize your schedule?</h2>
          <p>
            Join thousands of users who are already saving time with
            SlotSwapper.
          </p>
          <button className="cta-button secondary" onClick={handleGetStarted}>
            {user ? "View Dashboard" : "Sign Up Now"}
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 SlotSwapper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
