import React from 'react';


const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-heading">Life Planning, Making Easy to Turn Dreams a Reality.</h1>
      <p className="hero-subheading">Get Exclusive offers on purchase of any plans</p>
      <form className="email-signup">
        <input type="email" placeholder="Your Email" className="email-input" />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </section>
  );
};

export default Hero;
