import React,{useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { FaCode, FaChartLine, FaBrain, FaGlobe, FaUserFriends, FaLightbulb } from 'react-icons/fa';
import './homeservices.css';


const servicesData = [
  {
    icon: <FaCode />,
    title: "Software Development",
    description:
      "By developing creative, custom solutions that are tailored to your particular business demands, our experts assist you in hastening your digital transformation.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    description:
      "The industrial world is facing rapidly changing challenges. Snaplessons's cutting-edge, insight-driven methodology helps businesses to realize digital capital from operational results.",
  },
  {
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    description:
      "Snaplessons using the AI & ML technology, an annotation and workflow tool that facilitates collecting, grading, transcribing and annotating data across various media types.",
  },
  {
    icon: <FaGlobe />,
    title: "GLOSS",
    description:
      "GLOSS is a global settlement system which is used for end to end processing of transactions. It also supports middle-office and back-office operations, also supports ledgers and P&L.",
  },
  {
    icon: <FaUserFriends />,
    title: "Offshore Development",
    description:
      "Snaplessons Offshore Development Services model enables you to scale up your team in accordance with your demands and specifications, increasing your agility and positioning you for rapid expansion.",
  },
  {
    icon: <FaLightbulb />,
    title: "Product Development",
    description:
      "Have a fantastic concept but require a knowledgeable technical team to realize it? Numerous firms have received assistance from Snaplessons on their path from conceptual design to live implementation.",
  },
];

const HomeServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="services">
      <h2>Our Services</h2>
      <p>
        The pace of business in the digital age is accelerating. You need to be
        able to build, adopt, and expand software applications fast and easily
        to be able to take advantage of new market possibilities and shifting
        client expectations. Snaplessons gives you the proper head start with
        long-term solutions. Explore our offerings below.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index} data-aos="fade-up">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
