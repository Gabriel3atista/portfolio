import gsap from 'gsap';
import { useEffect } from 'react';
import { useState } from 'react';

//Estilo
import '../styles/style.scss';

export function Menu() {

    useEffect(() =>{

        //Animação de início
        let menu = document.querySelector("ul")
        gsap.from(menu, {opacity: 0, x: -100, duration: 1, ease: "Power4.easeOut", delay: 1})

    },[]);

    const [isActive, setIsActive] = useState<boolean>(true);

    return (
        <div id="menu">
            <div className="bgMenu"></div>
            <div id="hamburguer" onClick={() => {
                setIsActive(!isActive)
            }}>
                <div className="lines">
                    <span className={isActive ? "line-1" : "line-1 active"}></span>
                    <span className={isActive ? "line-2" : "line-2 active"}></span>
                </div>
            </div>
            <div id="menuList" className={isActive ? "menuList" : "menuList active"}>
                <ul>
                    <a href="#home" className="home-item" onClick={() => {
                        setIsActive(!isActive);
                    }}>
                        <li>Home</li>
                    </a>
                    <a href="#works" className="works-item" onClick={() => {
                        setIsActive(!isActive);
                    }}>
                        <li>Works</li>
                    </a>
                    <a href="#skills" className="skills-item" onClick={() => {
                        window.location.href = '#skills';
                        setIsActive(!isActive);
                    }}>
                        <li>Skills</li>
                    </a>
                    <a href="#about" className="about-item" onClick={() => {
                        window.location.href = '#about';
                        setIsActive(!isActive);
                    }}>
                        <li>About me</li>
                    </a>
                    <a href="#contact" className="contact-item" onClick={() => {
                        window.location.href = '#contact';
                        setIsActive(!isActive);
                    }}>
                        <li>Contact</li>
                    </a>
                </ul>
                <div id="social-medias-mobile">
                    <div className="iconList">
                        <ul>
                            <a className="github" href="https://github.com/Hekez" target="_blank">
                                <li><i className="fab fa-github"></i></li>
                            </a>
                            <a className="linkedin" href="https://www.linkedin.com/in/gabriel3atista/" target="_blank">
                                <li><i className="fab fa-linkedin"></i></li>
                            </a>
                            <a className="instagram" href="https://www.instagram.com/" target="_blank">
                                <li><i className="fab fa-instagram"></i></li>
                            </a>
                            <a className="whatsapp" href="https://api.whatsapp.com/send?phone=5541984012729" target="_blank">
                                <li><i className="fab fa-whatsapp"></i></li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}