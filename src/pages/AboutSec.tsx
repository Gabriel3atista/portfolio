//Estilo
import '../styles/style.scss';

//Assets
import about from '../assets/images/about.svg';
import me from '../assets/images/me.png';

export function About() {
    return (
        <div id="about" className="section aboutSec">
            <div className="content">
                <div className="myselfImg">
                    <img src={me} alt="me" />
                </div>
                <div className="text">
                    <img className="titleSvg" src={about} alt="about" />
                    <div className="subtitle">
                        <h2>About me</h2>
                        <p>Enchanted by innovation and technology, I chose to graduate in Systems Analysis and Development. Today, I work as a Front-End Developer at IESDE LTDA, and in my spare time I try to develop personal projects to put into practice the knowledge I acquire over time. As a dreamy person, my focus is always to develop myself to accomplish my goals and help people with my abilities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
