import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section>
      <header className="LandingPage">
        <h1>
          Welcome to <span className="nonwrap">SocialGeek</span>
        </h1>
      </header>
      <main className="landing_main">
        <p>
          Welcome to SocialGeek where you cand find people who you have an
          interest in common with and find the latest events in the place where
          you are located
        </p>
      </main>
      <div>
        <Link to="/login">Sign in your Account</Link>
        <Link to="/register">Create a new Account</Link>
        <Link to="/posts">Go to Posts</Link>
      </div>
    </section>
  );
};

export default LandingPage;
