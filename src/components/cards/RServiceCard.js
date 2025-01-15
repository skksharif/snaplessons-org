import React,{useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './GlossInfo1.css';
import { FaCheckCircle } from 'react-icons/fa';

const RServiceCard = ({ image, title, description, items }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="gloss-container-r">
      <div className="gloss-image-r" data-aos="fade-left">
        <img src={image} alt={title} className="service-image" />
      </div>
      <div className="gloss-content-r" data-aos="fade-right">
        <h2 className="gloss-title">{title}</h2>
        <p className="gloss-description">{description}</p>
        <ul className="gloss-features">
          {items.map((item, index) => (
            <li key={index} className="feature-item">
              <FaCheckCircle className="check-icon" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RServiceCard;
