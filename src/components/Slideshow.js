import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './slideshow.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Slideshow = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Autoplay effect
  useEffect(() => {
    const autoplay = setInterval(nextSlide, interval);
    return () => clearInterval(autoplay);
  }, [currentIndex, interval]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slideshow-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ display: index === currentIndex ? 'flex' : 'none' }}
        >
          <div className="slideshow-text" >
            <h2 data-aos="fade-up">{slide.title}</h2>
            <p>{slide.description}</p>
          
          </div>
          <img
            src={slide.image}
            alt={`Slide ${index}`}
            className="slideshow-image"
            data-aos="fade-left"
          />
        </div>
      ))}
      <button onClick={prevSlide}>
        <img src="./images/slider/back.png" alt="Previous" />
      </button>
      <button onClick={nextSlide}>
        <img src="./images/slider/next.png" alt="Next" />
      </button>
    </div>
  );
};

export default Slideshow;
