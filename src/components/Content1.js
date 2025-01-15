import React,{useEffect} from "react";
import "./content1.css";
import AOS from 'aos';
import "aos/dist/aos.css";
export default function Content1() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="home">
        <div class="home-content" >
          <div className="home-image" data-aos="fade-down">
            <img src="./images/icons/settings.png" alt="" />
          </div>
          <div class="welcome-banner" data-aos="fade-up">
            <h1>Snaplessons Makes The Easiest Solution For You</h1>
            <p>
              Snaplessons is an innovative and progressive IT services provider,
              dedicated to offering exceptional and cutting-edge solutions
              tailored specifically to address the unique needs and challenges
              of your business.
            </p>
            <a href="tel:+916300483327">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
}
