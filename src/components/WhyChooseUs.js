import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhyChooseUs.css";
import {
  FaUsers,
  FaTasks,
  FaClipboardCheck,
  FaClock,
  FaHandshake,
  FaProjectDiagram,
} from "react-icons/fa";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="why-choose-us">
      <h2>Why Choose Us!</h2>
      <div className="content">
        <div className="circular-container" data-aos="fade-up">
          <div className="center-content">
            <p>Time & Material Model</p>
          </div>
          <div className="circle-item item1">
            <FaUsers />
            <span>Resource Allocation</span>
          </div>
          <div className="circle-item item2">
            <FaTasks />
            <span>We Analyze Requirements</span>
          </div>
          <div className="circle-item item3">
            <FaClipboardCheck />
            <span>We Propose T&M Model</span>
          </div>
          <div className="circle-item item4">
            <FaProjectDiagram />
            <span>Project Completion</span>
          </div>
          <div className="circle-item item5">
            <FaClock />
            <span>Long Hour, Review Work</span>
          </div>
          <div className="circle-item item6">
            <FaHandshake />
            <span>Project Agreement and Award</span>
          </div>
        </div>
        <div className="text-content" data-aos="fade-up">
          <h3>Time & Material Model</h3>
          <p>
            T&M is a highly tailored approach to clients' business needs. It is
            the most flexible approach for clients as new ideas can be easily
            incorporated at any time. Features may be added or removed. All
            unpredictable challenges are resolved as they occur.
          </p>
          <p>
            In Time and materials, developers spend as much time as needed to
            build a high-quality solution, and the client pays for actual
            development hours, so the risk of overestimation/underestimation is
            eliminated.
          </p>
          <h4>Approaches</h4>
          <div className="approaches">
            <div className="approach-item">
              <FaUsers />
              <span>Staff Augmentation</span>
            </div>
            <div className="approach-item">
              <FaProjectDiagram />
              <span>Capacity Augmentation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
