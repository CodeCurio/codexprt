import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about container">
      <div className="about-left">
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>About Yash Web Solution</h2>
        <p>
          At Yash Web Solution, we help businesses establish a strong online
          presence with expert web development and Google My Business (GMB)
          services. Our goal is to enhance your brand visibility, improve local
          search rankings, and drive more organic traffic to your business. We
          specialize in custom website development, ensuring your site is fast,
          responsive, and SEO-friendly to attract potential customers.<br />
          Additionally, our GMB SEO services help businesses rank higher on
          Google Maps and local search results, bringing in more leads. We also
          offer GMB number verification and GMB listing verification, ensuring
          your business is properly listed and verified for better trust and
          credibility.<br /> With our local SEO optimization, we help businesses get
          discovered by customers searching for their services. Whether you're a
          startup or an established brand, we ensure your online presence is
          optimized for success.
        </p>
      </div>
    </div>
  );
};

export default About;
