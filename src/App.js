import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Index'
import Intro from './components/Intro/Index';
import Project from './components/Projects/Index';
import Skill from './components/Skills/Index';
import Experience from './components/Experience/Experience';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
        <Header/>
        <Intro/>
        <Project/>
        <Skill/>
        <Experience/>
        <Contact/>
      
    </div>
  );
}

export default App;
