//Estilo
import '../styles/style.scss';

//Assets
import emoji from '../assets/images/emoji.png';
import arrow from '../assets/images/arrow.svg';

export function Contact() {
    return (
        <div id="contact" className="section contactSec">
            <div className="content">
                <div className="text">
                    <div className="subtitle">
                        <img className="emoji" src={emoji} alt="emoji" />
                        <h2>Do you need a website?</h2>
                        <h3>Contact me</h3>
                        <p>Interested in working with me? Let's talk. Get in touch via the social network (You can find them in the menu).</p>
                        <img className="arrow" src={arrow} alt="emoji" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Thanks for visiting my website :)</p>
            </div>
        </div>
    );
}
