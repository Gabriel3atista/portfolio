//Estilo
import '../styles/style.scss';

//Assets
import skills from '../assets/images/skills.svg';
import { useState } from 'react';

export function Skills() {

    const [title, setTitle] = useState<string>('Skills');
    const [subTitle, setSubtitle] = useState('Languages, tools and frameworks that I use to create the applications.');

    const setHoverAction = (title: string, subTitle: string) => {

        return () => {

            setTitle(title);
            setSubtitle(subTitle);

        };

    };

    const removeHoverAction = () => {

        setTitle('Skills');
        setSubtitle('Languages, tools and frameworks that I use to create the applications.');

    };

    return (

        <div id="skills" className="section skillsSec">
            <div className="content">
                <div className="text">
                    <div>
                        <img className="titleSvg" src={skills} alt="together" />
                        <div className="subtitle">
                            <h2>{title}</h2>
                            <p>{subTitle}</p>
                        </div>
                    </div>
                </div>
                <div className="stacks">
                    <article className="stack" onMouseMove={setHoverAction('HTML5', 'HTML5 is used to create the basic structure of a website.')} onMouseLeave={removeHoverAction}>
                        <i className="devicon-html5-plain"></i>
                    </article>
                    <article className="stack" onMouseMove={setHoverAction('CSS3', 'The function of CSS3 is to bring a website to life. He is responsible for creating the style of a page.')} onMouseLeave={removeHoverAction}>
                        <i className="devicon-css3-plain"></i>
                    </article>
                    <article className="stack" onMouseMove={setHoverAction('JavaScript', 'JavaScript is a high-level programming language primarily designed to run in browsers and manipulate web page behaviors.')} onMouseLeave={removeHoverAction}>
                        <i className="devicon-javascript-plain"></i>
                    </article>
                </div>
                <div className="stacks">
                    <article className="stack" onMouseMove={setHoverAction('React', "React's function is to provide an application in the SPA concept.")} onMouseLeave={removeHoverAction}>
                        <i className="devicon-react-original"></i>
                    </article>
                    <article className="stack" onMouseMove={setHoverAction('TypeScript', 'TypeScript is an arm of JavaScript in charge of typing code, making it more secure.')} onMouseLeave={removeHoverAction}>
                        <i className="devicon-typescript-plain"></i>
                    </article>
                    <article className="stack" onMouseMove={setHoverAction('WordPress', 'Wordpress is a system used to manage websites, blogs, virtual stores, news portals, member areas and other types of pages.')} onMouseLeave={removeHoverAction}>
                        <i className="devicon-wordpress-plain"></i>
                    </article>
                </div>
            </div>
        </div>
        
    );
}
