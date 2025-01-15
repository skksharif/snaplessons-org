import React from 'react';
import ServiceCard from '../components/cards/ServiceCard';
import RServiceCard from '../components/cards/RServiceCard';

const Services = () => {
  return (
    <div className="services-list">
      <RServiceCard
        image="./images/services/gloss.png"
        title="GLOSS"
        description="A global settlement system for end-to-end trade processing supporting multiple asset classes and functions."
        items={[
          "Trade capture and enrichment",
          "Confirmation & settlement instructions",
          "Corporate Actions",
          "Netting & Allocations processing",
          "Regulatory Reporting"
        ]}
      />
      <ServiceCard
        image="./images/services/offshore.png"
        title="Offshore Development Services"
        description="Flexible team scaling with offshore development, enhancing efficiency and reducing costs."
        items={[
          "Reduces cost",
          "Increased Efficiency and Reliability",
          "Faster solutions & multitasking",
          "Skilled and Diverse Talent Pool",
          "Established Infrastructure Access"
        ]}
      />
      <RServiceCard
        image="./images/services/productdev.png"
        title="Product Development"
        description="Comprehensive support from conceptual design to live implementation across digital platforms."
        items={[
          "Seamless collaboration",
          "Prompt Feedback",
          "High Performance",
          "Risk Mitigation",
          "Reduced Cost & Maximizes ROI"
        ]}
      />
      <ServiceCard
        image="./images/services/itstaff.png"
        title="IT Staff Augmentation"
        description="Skilled staffing solutions to bridge gaps and support technological goals."
        items={[
          "Collaborative End-to-end Solutions",
          "Excellent Execution and Delivery",
          "Cost-effective Partnership Model",
          "Positive business impact"
        ]}
      />
      <RServiceCard
        image="./images/services/appdev.png"
        title="Software Application Development and Support"
        description="Custom solutions to accelerate digital transformation, tailored to unique business needs."
        items={[
          "Business Analysis and Documentation",
          "Front and Back-end Development",
          "Single-Page Applications & RESTful APIs",
          "Wireframing/Prototyping",
          "Testing, Support & Maintenance"
        ]}
      />
      <ServiceCard
        image="./images/services/cloud.png"
        title="Cloud Native & DevOps"
        description="Efficient cloud and DevOps solutions for fast, cost-effective product launches."
        items={[
          "Languages, Frameworks and Containers",
          "APIs & Microservices",
          "Agile DevOps Processes",
          "Automation",
          "Cloud Infrastructure Management"
        ]}
      />
      <RServiceCard
        image="./images/services/iot.jpg"
        title="Digital Transformation & IoT"
        description="Insight-driven digital capital realization through comprehensive transformation strategies."
        items={[
          "Data analytics solutions",
          "Real-time insights",
          "Innovative business solutions",
          "Informed decision making"
        ]}
      />
      <ServiceCard
        image="./images/services/blockchain.jpg"
        title="Blockchain"
        description="Blockchain solutions for creating customized, efficient business cases."
        items={[
          "Blockchain Assessment Framework",
          "Informed Consent Forms",
          "Blockchain for Real Estate Domain"
        ]}
      />
      <RServiceCard
        image="./images/services/ai.jpg"
        title="Artificial Intelligence & Machine Learning"
        description="AI & ML solutions for data annotation, processing, and creating training datasets."
        items={[
          "Drone Management System for Land Survey",
          "Drone Management for Mining",
          "Audio and Video processing"
        ]}
      />
      <ServiceCard
        image="./images/services/bigdata.jpg"
        title="Big Data & Data Sciences"
        description="Data and analytics services for data modernization and intelligent systems."
        items={[
          "Data exploration",
          "Data Modeling",
          "Model Testing",
          "Model Deployment"
        ]}
      />
    </div>
  );
};

export default Services;
