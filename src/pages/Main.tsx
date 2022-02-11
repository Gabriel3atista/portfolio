//Import Pages
import { Home } from '../pages/Home';
import { TogSec } from '../pages/TogSec';
import { Works } from '../pages/WorksSec';
import { Skills } from '../pages/SkillsSec';
import { About } from '../pages/AboutSec';
import { Contact } from '../pages/ContactSec';

//Components
import { Modal } from '../components/Modal';

export function Main() {
    return (
        <div className="main">
            <Modal />
            <Home />
            <TogSec />
            <Works />
            <Skills />
            <About />
            <Contact />
        </div>
    );
}