// Pages
import { Main } from './pages/Main';

// Components
import { Menu } from './components/Menu';
import { SocialMedias } from './components/SocialMedias';

function App() {
  return (
    <div className="app">
      <Menu />
      <SocialMedias />
      <Main />
    </div>
  );
}

export default App;
