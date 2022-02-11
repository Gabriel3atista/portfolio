//Estilo
import '../styles/style.scss';

//Assets
import works from '../assets/images/works.svg';
import luciana from '../assets/images/luciana.png';
import nikeApp from '../assets/images/nikeApp.png';
import poupee from '../assets/images/poupee.png';
import bankme from '../assets/images/bankme.png';

export function Works() {
    return (
        <div id="works" className="section">
            <div className="content worksSec">
                <div className="text">
                    <img className="titleSvg" src={works} alt="works" />
                    <div className="subtitle">
                        <h2>My Works</h2>
                        <p>Here, you can check out the works I've done.</p>
                    </div>
                </div>
                <div className="worksImg">
                    <div className="imgList">
                        <div className="img">
                            <img src={nikeApp} alt="Nike App" data-original={nikeApp} />
                        </div>
                        <div className="img">
                            <img src={luciana} alt="Nutricionista Luciana" data-original={luciana}/>
                        </div>
                    </div>
                    <div className="imgList">
                        <div className="img">
                            <img src={bankme} alt="Bankme" data-original={bankme} />
                        </div>
                        <div className="img">
                            <img src={poupee} alt="Poupee App" data-original={poupee} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}