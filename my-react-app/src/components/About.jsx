import React from "react";


function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our URL Shortener</h1>
      <p className="about-description">
        Welcome to our URL shortening service! We are here to make your long and
        unwieldy URLs shorter, making them easier to manage and share. Whether
        you're posting links on social media, sending them in emails, or using
        them anywhere else, our tool simplifies the process.
      </p>
      <p className="about-description">
        We take great pride in delivering a speedy and dependable service that
        helps you efficiently share your content. Our platform also provides
        detailed analytics, allowing you to monitor the performance of your
        shortened links and gain valuable insights into their usage.
      </p>
      <p className="about-description">
        Thank you for choosing our URL shortener. If you have any questions,
        suggestions, or feedback, please do not hesitate to {" Linkedin "}
        <a href="https://www.linkedin.com/in/mohd-saif-khan-3b4979202/">contact us</a>. We're here to assist you!
      </p>
    </div>
  );
}

export default About;
