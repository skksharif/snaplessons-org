import React,{useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import "./corporate.css";
import { FaBullseye, FaUsers, FaGlobe, FaTrophy } from "react-icons/fa";
import ProfileCard from "../components/cards/ProfileCard";


const CorporatePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="corporate-container">
      <section className="about-us">
        <div className="about-content" data-aos="fade-up">
          <h2>About Us</h2>
          <p>
            At Snaplessons, we deliver essential business proficiency so you can
            experience maximum IT efficiency. Our goal is to make your life
            easier by aligning your business strategy with your IT strategy and
            optimizing your IT investments. We understand the needs of our
            customers and are always looking for new ways to serve them better.
          </p>
          <p>
            Our team consists of talented individuals who are passionate about
            what they do, which means we can’t wait to get started on your next
            project.
          </p>
        </div>
        <div className="about-image" data-aos="fade-up">
          {/* Add an image here or use an icon */}
          <img src="./images/corporate.png" alt="" />
        </div>
      </section>

      <section className="vision-mission">
        <div className="vision-content">
          <h2>
            To bring inspiration and innovation to every business in the world.
          </h2>
          <div className="mv-top">
            <img src="./images/vmv.png" alt="" data-aos="fade-up" />
            <div className="mission-vision-values">
              <div className="mission" data-aos="flip-up">
                <h3>Mission</h3>
                <p>
                  Our goal is to create digital experiences to our clients to
                  solve their business needs in a cost-effective manner.
                </p>
              </div>
              <div className="vision" data-aos="flip-up">
                <h3>Vision</h3>
                <p>
                  Our Vision is to lead the way in cutting-edge onshore,
                  offshore, and outsourcing technologies. Businesses will
                  develop into valuable assets by utilizing our attention to
                  detail, quality control.
                </p>
              </div>
              <div className="values" data-aos="flip-up">
                <h3>Values</h3>
                <p>
                  Snaplessons’s values and ethics form the foundation of who we are.
                  Trust, Respect, and Freedom are the three guiding values of
                  Snaplessons, forming the basis of a successful, long-lasting
                  enterprise.
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      <center><h1>Team</h1></center>
      <ProfileCard/>


    </div>
  );
};

export default CorporatePage;
