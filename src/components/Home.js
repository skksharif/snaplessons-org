import React, { useState } from "react";
import "../App.js";
import Slideshow from "./Slideshow.js";
import Content1 from "./Content1.js";
import Content2 from "./Content2.js";
import Content3 from "./Content3.js";
import AnalystPerspectives from "./AnalystPerspectives.js";
import ContactForm from "./ContactForm.js";
import Footer from "./Footer.js";
import HomeServices from "./HomeServices.js";
import WhyChooseUs from "./WhyChooseUs.js";


export default function Home() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  const slides = [
    {
      title: 'Delivering Doman-driven, Technical Expertise.',
      description: 'We provide the best solutions for your needs.',
      image: './images/slider/1.png',
    },
    {
      title: 'Reimagine Technology, with our Expertise.',
      description: 'Our team consists of experienced professionals.',
      image: './images/slider/2.png',
    },
    {
      title: 'Fostering Innovation, Leading Change.',
      description: 'Products and solutions that keep you always ahead.',
      image: './images/slider/3.png',
    }
  ];
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
     <Slideshow slides={slides} interval={4000} />
      <Content1 />
      <HomeServices/>
      <WhyChooseUs/>
      <ContactForm/>
    </>
  );
}
