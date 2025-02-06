import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <main className="container">
        <div className="text-center">
          <h2 className="heading">Welcome to Virtual Classroom</h2>
          <p className="description">
            Collaborate, learn, and grow in your virtual classrooms. Teachers can post notes, manage students, and create engaging learning spaces. Students can access class notes and resources anytime, anywhere.
          </p>
          <button
            className="button"
            onClick={() => navigate("/profile")}
          >
            Go to Profile
          </button>
        </div>
      </main>

      <footer className="footer">
        <div className="text-center">
          <p>© 2025 Virtual Classroom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
