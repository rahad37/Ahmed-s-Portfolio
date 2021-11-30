import React, { useState } from 'react';
import './Works.scss';

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
          id: "1",
          icon: "./assets/globe.png",
          title: "Bohubrihi Online Shop",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          img: "https://i.ibb.co/8snYym1/bohubrihi-e-commerce.png",
          live: "https://www.linkedin.com/feed/update/urn:li:activity:6871420600326483968/"
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Blog Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: "https://i.ibb.co/3sDhMvd/blog-apps.png",
          live: "https://www.linkedin.com/feed/update/urn:li:activity:6871429208732786688/"
        },
        {
          id: "3",
          icon: "./assets/globe.png",
          title: "Ahmed E-Commerce",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img: "https://i.ibb.co/7g6d7XM/ahmed-e-commerce.png",
        },
      ];

      const handleClick = (way) =>{
          way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : 
          setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      }

    return (      
        <div className='works' id='works'>
          <h1>Best Work...</h1>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`, cursor: 'pointer'}}>
                {data.map((d) => (
                  
                    <div className="container" key={d.id}>
                    
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                            <a href={d.live} target='_blank' className='editLink'>
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                            </a>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                   
                </div>
               
                ))}
            </div>
            <img src="assets/arrow.png" alt="" className="arrow left" onClick={() => handleClick('left')}/>
            <img src="assets/arrow.png" alt="" className="arrow right" onClick={() => handleClick('right')}/>
        </div>
    );
};

export default Works;