import React,{useEffect} from 'react'
import './cards.css'
import AOS from 'aos';
import "aos/dist/aos.css";
export default function WorkCard(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <div className='work-card'>
        <img src="./images/icons/network-admin.png" alt="Work Image"/>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
    </div>
    </>
  )
}
