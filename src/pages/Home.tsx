import gsap from 'gsap';
import { useEffect } from 'react';

//Estilo
import '../styles/style.scss';

export function Home() {

    useEffect(() =>{

        let text = document.querySelector("div > .text")
        let p = document.querySelector("div > .text > p")

        gsap.from(text, {opacity: 0, y: 100, duration: 1.5, ease: "Power4.easeOut"})
        gsap.from(p, {opacity: 0, y: 100, duration: 1.5, ease: "Power4.easeOut", delay: .2})

    },[]);

    return (
        <div id="home" className="section homeSec">
            <div className="content main text">
                <h2>Hello, I'm</h2>
                <h1>Gabriel Batista</h1>
                <h2>or Hekez on the games :)</h2>
                <p className="p">and this is my space where I share my work and a little bit of my life. I’m a dreamy person, passionate about astronomy, design,
                    games and programming. 🚀</p>
            </div>
            <div className="filter"></div>
            <div className="bg"></div>
        </div>
    );
}