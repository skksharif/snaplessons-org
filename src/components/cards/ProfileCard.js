import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProfileCard.css";

const ProfileCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="profile-card" data-aos="flip-left">
      <div className="profile-image">
        <img src="./images/team/ganesh.jpg" alt="Ganesh" />
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <h2>Ganesh Mamidipalli </h2>
          <h3>Managing Director at Snaplessons</h3>
          <p>@snapleesons</p>
          {/*
  <p>Follow!</p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
            */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
