import together from '../assets/images/together.svg';
import img from '../assets/images/img.png';

//Estilo
import '../styles/style.scss';

export function TogSec() {
    return (
        <div className="section">
            <div className="content togSec">
                <div>
                    <img className="figma" src={img} alt="Figma Tool" />
                </div>
                <div className="text">
                    <div>
                        <img className="titleSvg" src={together} alt="together" />
                        <div className="subtitle">
                            <h2>Let's create <span className="together">together</span></h2>
                            <p>Do you have the idea of creating a totally modern website? Well, I can help you. Together, we can create an application for your product or services using the best technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}