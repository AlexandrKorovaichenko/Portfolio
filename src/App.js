import './App.css';
import Header from './header/Header';
import AboutMe from './AboutMe/AboutMe'
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import RemoteWork from './remoteWork/RemoteWork';
import Contacts from './сontacts/Contacts';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <RemoteWork />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
