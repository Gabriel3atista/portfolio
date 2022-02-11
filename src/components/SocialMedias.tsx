import gsap from 'gsap';
import { useEffect } from 'react';

//Estilo
import '../styles/style.scss';

export function SocialMedias() {

    useEffect(() =>{

        let medias = document.querySelector("#social-medias")

        gsap.from(medias, {opacity: 0, x: 100, duration: 1, ease: "Power4.easeOut", delay: 1})

    },[]);

    return (
        <div id="social-medias">
            <div className="iconList">
                <ul>
                    <a className="github" href="https://github.com/Gabriel3atista" target="_blank" rel="noreferrer">
                        <li><i className="fab fa-github"></i></li>
                    </a>
                    <a className="linkedin" href="https://www.linkedin.com/in/gabriel3atista/" target="_blank" rel="noreferrer">
                        <li><i className="fab fa-linkedin"></i></li>
                    </a>
                    <a className="instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <li><i className="fab fa-instagram"></i></li>
                    </a>
                    <a className="whatsapp" href="https://api.whatsapp.com/send?phone=5541984012729" target="_blank" rel="noreferrer">
                        <li><i className="fab fa-whatsapp"></i></li>
                    </a>
                </ul>
            </div>
        </div>
    );
}